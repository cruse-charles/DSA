// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

var maxProfit = function(prices) {
    // Initialize `buyPrice` to the first price in the array.
    // This represents the price at which we "buy" the stock initially.
    let buyPrice = prices[0];

    // Initialize `profit` to 0.
    // This will store the total profit we can achieve.
    let profit = 0;

    // Iterate through the array of prices.
    for (let i = 0; i < prices.length; i++) {
        // If the current price is lower than the `buyPrice`,
        // update `buyPrice` to the current price.
        // This ensures we always buy at the lowest price seen so far.
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        // Add the profit from selling at the current price.
        // This calculates the profit for the current transaction.
        profit += prices[i] - buyPrice;

        // Update `buyPrice` to the current price.
        // This simulates selling the stock and immediately buying it again at the current price.
        buyPrice = prices[i];
    }

    // Return the total profit that can be achieved.
    return profit;
};