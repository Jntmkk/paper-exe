// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import {AssetDemo} from "./AssetDemo.sol";
import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";

/**
  DID Registry
 */
contract Registry is ChainlinkClient {
    constructor(address _link) public {
        if (_link == address(0)) {
            setPublicChainlinkToken();
        } else {
            setChainlinkToken(_link);
        }
    }

    // did => ipfs
    mapping(string => string) public id2isuuer;
    mapping(string => address) public id2contract;

    /**
        返回 ID 对应的 控制 document 的智能合约地址
    */
    function resolveDocuemnt(string memory id)
        public
        view
        returns (string memory)
    {
        return id2isuuer[id];
    }

    function register(string memory _id, string memory _hash) public {
        id2isuuer[_id] = _hash;
        return;
    }

    function create(
        string memory _did,
        address _owner,
        string memory _imgUrl,
        string memory _name,
        string memory _hash
    ) public {
        AssetDemo asset = new AssetDemo(
            chainlinkTokenAddress(),
            _did,
            _owner,
            _imgUrl,
            _name
        );
        id2isuuer[_did] = _hash;
        id2contract[_did] = address(asset);
    }

    receive() external payable {}

    fallback() external payable {}
}
