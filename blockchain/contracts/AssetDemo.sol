// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./AbstractAsset.sol";

contract AssetDemo is AbstractAsset {
    uint256 public data = 0;

    constructor(
        address _link,
        string memory _did,
        address _owner,
        string memory _imgUrl,
        string memory _name
    ) public {
        initLink(_link);
        price = 0;
        stage = Stage.Frozen;
        imgUrl = _imgUrl;
        did = _did;
        owner = _owner;
        name = _name;
        emit AssetCreationEvent(_name, _imgUrl, _did, _owner, price, stage);
    }

    function buy() public payable {
        price = msg.value;
        buyer = msg.sender;
        // 参数见 https://docs.chain.link/docs/decentralized-oracles-ethereum-mainnet/
        address addr = address(0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8);
        bytes32 jobId = "d5270d1c311941d0b08bead21fea7747";
        uint256 payment = 1000000000000000000;
        // 这是自己的服务器地址
        string memory url = string(
            abi.encodePacked("https://api.whh.buzz/api/asset/valid?id=", did)
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
    }

    function buyOracleReqCallback(bytes32 _requestId, uint256 _valid) public {
        // emit LogEvent(msg.sender, _valid);
        // emit CallbackInvokeEvent("buyOracleReqCallback", _valid);
        // if (!_valid) {
        //     emit AssetCheckFailed(address(this), buyer);
        //     return;
        // }
        data = _valid;
        transformOwner(buyer);
    }

    function transformOwner(address _owner) internal {
        emit OwnerTransformEvent(address(this), owner, _owner);
        owner = _owner;
    }
}
