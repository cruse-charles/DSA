// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


var maxProfit = function(prices) {
    // Initialize `buyPrice` to the first price in the array.
    // This represents the minimum price seen so far.
    let buyPrice = prices[0];

    // Initialize `profit` to 0.
    // This will store the maximum profit we can achieve.
    let profit = 0;

    // Iterate through the array of prices.
    for (let i = 0; i < prices.length; i++) {
        // If the current price is lower than the `buyPrice`,
        // update `buyPrice` to the current price.
        // This ensures we always buy at the lowest price seen so far.
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        // Calculate the potential profit if we sell at the current price.
        // Update `profit` to the maximum of the current `profit` and the potential profit.
        profit = Math.max(profit, prices[i] - buyPrice);
    }

    // Return the maximum profit that can be achieved.
    return profit;
};