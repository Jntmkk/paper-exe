// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {Base, LinkBase, ChainlinkBase} from "./Base.sol";

contract Asset is ChainlinkBase, Base {
    enum Stage {
        Frozen,
        Normal,
        Locked,
        Waiting,
        Cancelled_Lock,
        Cancelled_Waiting
    }
    enum TransactionType {
        Fast,
        Through
    }
    // 单例数据
    struct MetaData {
        address holder;
        // uint256 creationTime;
        uint256 price;
        Stage stage;
        uint256 bidPrice;
        address buyer;
        string id;
    }
    // for 数据统计
    int8 public identity;
    mapping(address => uint256) public addr2gas;
    MetaData public metaData;
    // 非单例 不同请求 数据可能不同
    bool public data;
    TransactionType public trType;
    // 访问控制 modifier
    modifier atStage(Stage _stage) {
        require(_stage == metaData.stage, "not expected stage");
        _;
    }
    modifier requirePrice() {
        require(msg.value >= metaData.price, "Underbid");
        _;
    }

    function setIdentify(int8 _identity) public {
        identity = _identity;
    }

    // 事件定义
    event StageChangeEvent(Stage from, Stage to);

    // 变更状态
    function changeStageTo(Stage _stage) public {
        Stage from = metaData.stage;
        metaData.stage = _stage;
        emit StageChangeEvent(from, _stage);
    }

    function transformEth(address _to, uint256 _value) private {
        payable(_to).transfer(_value);
    }

    function returnBuyerEth() public {
        transformEth(metaData.buyer, metaData.bidPrice);
    }

    function transformAllEthToHolder() public {
        transformEth(metaData.holder, address(this).balance);
    }

    function transformHolder(address _addr) private {
        metaData.holder = _addr;
    }

    function setFileHash(bytes32 _hash) public {
        //todo
    }

    function setPrice(uint256 _price) public {
        metaData.price = _price;
    }

    constructor(address _link, address _holder) public {
        initLinkAddress(_link);
        metaData = MetaData({
            holder: _holder,
            price: 0,
            stage: Stage.Frozen,
            bidPrice: 0,
            buyer: address(0),
            id: "null"
        });
        transferOwnership(msg.sender);
        emit LogEvent("constructor",identity);
    }

    function callback(bytes32 _requestId, uint256 _data)
        public
        recordChainlinkFulfillment(_requestId)
    {
        emit CallbackInvokeEvent("callback", _data);
    }

    /**
     *
     *
     *
     *
     */
    function buy(TransactionType _type)
        public
        payable
        atStage(Stage.Normal)
        requirePrice
    {
        trType = _type;
        metaData.bidPrice = msg.value;
        metaData.buyer = msg.sender;
        changeStageTo(Stage.Locked);
        // 参数见 https://docs.chain.link/docs/decentralized-oracles-ethereum-mainnet/
        address addr = address(0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8);
        bytes32 jobId = "bc746611ebee40a3989bbe49e12a02b9";
        uint256 payment = 1000000000000000000;
        // 这是自己的服务器地址
        string memory url = string(
            abi.encodePacked(
                "https://api.whh.buzz/api/asset/valid?id=",
                metaData.id
            )
        );
        string memory path = "data";
        createRequestTo(
            addr,
            jobId,
            payment,
            this.buyOracleReqCallback.selector,
            url,
            path
        );
        emit LogEvent("buy",identity);
    }

    //
    function buyOracleReqCallback(bytes32 _requestId, bool _valid)
        public
        recordChainlinkFulfillment(_requestId)
    {
        data = _valid;
        // emit LogEvent(msg.sender, _valid);
        emit CallbackInvokeEvent("buyOracleReqCallback", _valid);
        if (!_valid) {
            returnBuyerEth();
            changeStageTo(Stage.Normal);
            return;
        }
        if (trType == TransactionType.Fast) {
            transformAllEthToHolder();
            // transferOwnership(metaData.buyer);
            transformHolder(metaData.buyer);
            changeStageTo(Stage.Frozen);
        } else {
            changeStageTo(Stage.Waiting);
            writeThough();
        }
        emit LogEvent("buyOracleReqCallback",identity);
    }

    function writeThough() public {
        address addr = address(0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8);
        bytes32 jobId = "83ba9ddc927946198fbd0bf1bd8a8c25";
        uint256 payment = 1000000000000000000;
        string memory url = string(
            abi.encodePacked(
                "https://api.whh.buzz/api/asset/tr?id=",
                metaData.id
            )
        );
        string memory path = "data";
        createRequestTo(
            addr,
            jobId,
            payment,
            this.writeThoughCallback.selector,
            url,
            path
        );
    }

    function writeThoughCallback(bytes32 _requestId, bool _isOk)
        public
        recordChainlinkFulfillment(_requestId)
    {
        if (!_isOk) {
            transformEth(metaData.buyer, metaData.bidPrice);
            changeStageTo(Stage.Normal);
            return;
        }
        transformAllEthToHolder();
        changeStageTo(Stage.Frozen);
    }
}
