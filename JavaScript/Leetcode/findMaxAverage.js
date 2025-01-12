// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


var findMaxAverage = function(nums, k) {
    // Initialize the sum of the first `k` elements.
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    // Initialize the maximum sum as the sum of the first `k` elements.
    let maxSum = currentSum;

    // Use a sliding window to find the maximum sum of any contiguous subarray of length `k`.
    for (let i = k; i < nums.length; i++) {
        // Update the sum by subtracting the element that is left behind and adding the new element.
        currentSum = currentSum + nums[i] - nums[i - k];
        // Update the maximum sum if the current sum is greater.
        maxSum = Math.max(maxSum, currentSum);
    }

    // Calculate and return the maximum average value.
    return maxSum / k;
};