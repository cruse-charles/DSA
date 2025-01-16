// https://leetcode.com/problems/max-consecutive-ones-iii/submissions/1476159734/?envType=study-plan-v2&envId=leetcode-75

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

var longestOnes = function(nums, k) {
    // Initialize maxCount, and left pointer for the window
    let l = 0;
    let maxCount = 0;

    // Iterate through nums with the right pointer (r)
    for (let r = 0; r < nums.length; r++) {
        // If nums[r] is 0, decrement k since we are allowed to flip up to k zeros
        if (nums[r] === 0) k--;
        
        // While k < 0, shrink the window from the left (l)
        while (k < 0) {
            // If nums[l] is 0, increment k because we are no longer flipping this zero
            if (nums[l] === 0) k++;
            // Move the left pointer to shrink the window
            l++;
        }    
        
        // Update the maximum count of 1s in the current valid window
        maxCount = Math.max(maxCount, r - l + 1);
    }
    
    // Return the maximum count of consecutive 1s found in any window
    return maxCount;
};
