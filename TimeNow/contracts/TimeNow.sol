// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

error PriceConsumerV3__InsufficietDeposts(address, uint256, uint256);
error PriceConsumerV3__PaymentNotSuccessfull(address, uint256, uint256);

contract TimeNow {
    AggregatorV3Interface private priceFeed;
    mapping(address => uint256) private payers;

    event PaymentSuccessFul(address sender, uint256 amount, uint256 time);

    constructor(AggregatorV3Interface _address) {
        priceFeed = AggregatorV3Interface(_address);
    }

    receive() external payable {}

    function pay() public payable returns (bool) {
        uint256 _amount = msg.value;
        if (_amount == 0) {
            revert PriceConsumerV3__InsufficietDeposts(msg.sender, _amount, block.timestamp);
        }

        (bool success, ) = payable(address(this)).call{value: _amount}("");
        if (!success) {
            revert PriceConsumerV3__PaymentNotSuccessfull(msg.sender, _amount, block.timestamp);
        }

        payers[msg.sender] = _amount;

        emit PaymentSuccessFul(msg.sender, _amount, block.timestamp);

        return success;
    }

    function _getPriceRate(uint256 _amount) external view returns (uint256) {
        (, int price, , , ) = priceFeed.latestRoundData();
        uint256 adjustPrice = uint256(price) * 1e10;
        uint256 usd = _amount * 1e18;
        uint256 rate = (usd * 1e18) / adjustPrice;
        return rate;
    }

    function getPriceOfContract() external view returns (uint256) {
        return address(this).balance;
    }

    // 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    function getPriceFeed() external view returns (AggregatorV3Interface) {
        return priceFeed;
    }

    function getPayers() external view returns (uint256) {
        return payers[msg.sender];
    }
}
