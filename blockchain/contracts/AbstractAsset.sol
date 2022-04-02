// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";

contract AbstractAsset is ChainlinkClient {
    //资产状态枚举
    enum Stage {
        Frozen,
        Normal,
        Locked,
        Waiting,
        Cancelled_Lock,
        Cancelled_Waiting
    }
    //验证方式
    enum TransactionType {
        Fast,
        Through
    }
    //创建资产事件
    event AssetCreationEvent(
        string name,
        string url,
        string did,
        address owner,
        uint256 price,
        Stage stage
    );
    event OwnerTransformEvent(address _contract, address _from, address _to);
    event AssetCheckFailed(address _contract, address _buyer);
    /**
     *资产信息
     */
    //状态
    Stage stage;
    // 价格
    uint256 public price;
    // 去中心化 ID
    string public did;
    // 详情链接，用于展示
    string public imgUrl;
    // 拥有者
    address public owner;
    // 资产类别，演示为 DNS 域名
    string public assetType;
    // 资产名称
    string public name;
    //oracle 合约地址
    address oracle = address(0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8);
    //jobId
    bytes32 jobId = "bc746611ebee40a3989bbe49e12a02b9";
    //通过 oracle 请求的地址
    string serviceUrl;
    // 请求获取数据的路径
    string path;

    address buyer;

    function initLink(address _link) public {
        if (_link == address(0)) {
            setPublicChainlinkToken();
        } else {
            setChainlinkToken(_link);
        }
    }

    /**
     * @notice Returns the address of the LINK token
     * @dev This is the public implementation for chainlinkTokenAddress, which is
     * an internal method of the ChainlinkClient contract
     */
    function getChainlinkToken() public view returns (address) {
        return chainlinkTokenAddress();
    }

    /**
     * @notice Creates a request to the specified Oracle contract address
     * @dev This function ignores the stored Oracle contract address and
     * will instead send the request to the address specified
     * @param _oracle The Oracle contract address to send the request to
     * @param _jobId The bytes32 JobID to be executed
     * @param _payment link token
     * @param _url The URL to fetch data from
     * @param _path The dot-delimited path to parse of the response
     */
    function createRequestTo(
        address _oracle,
        bytes32 _jobId,
        uint256 _payment,
        bytes4 _callback,
        string memory _url,
        string memory _path
    ) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            _jobId,
            address(this),
            _callback
        );
        req.add("get", _url);
        req.add("path", _path);
        requestId = sendChainlinkRequestTo(_oracle, req, _payment);
    }
}
