// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo {
    uint8 public index;
    event TestEvent(uint8 index);

    constructor() public {
        index = 0;
    }

    function invoke() public {
        emit TestEvent(index);
        index += 1;
    }
}
