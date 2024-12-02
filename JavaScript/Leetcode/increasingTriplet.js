// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
// If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.


var increasingTriplet = function(nums) {
    // Initialize two variables to store the smallest and second smallest values encountered
    let i = Infinity; // Smallest number
    let j = Infinity; // Second smallest number

    // Iterate through the array
    for (let k of nums) {
        // If the current number is smaller than or equal to `i`, update `i`
        if (k <= i) {
            i = k;
        }
        // If the current number is greater than `i` but smaller than or equal to `j`, update `j`
        else if (k <= j) {
            j = k;
        }
        // If the current number is greater than both `i` and `j`, we found an increasing triplet
        else {
            return true;
        }
    }

    // If no increasing triplet is found, return false
    return false;
};
