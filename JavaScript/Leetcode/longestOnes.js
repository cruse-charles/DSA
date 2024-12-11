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
    // Initialize pointers for the sliding window (left and right) and a variable to track the maximum count of 1s
    let l = 0;
    let r = 0;
    let count = 0;

    // Expand the window by moving the right pointer (r)
    while (r < nums.length) {
        // If nums[r] is 0, decrement k since we are allowed to flip up to k zeros
        if (nums[r] === 0) k--;

        // If we have used up all flips (k < 0), shrink the window from the left (l)
        while (k < 0) {
            // If nums[l] is 0, increment k because we are no longer flipping this zero
            if (nums[l] === 0) {
                k++;
            }
            // Move the left pointer to shrink the window
            l++;
        }
        
        // Update the maximum count of 1s in the current valid window
        count = Math.max(count, r - l + 1);
        
        // Move the right pointer to expand the window
        r++;
    }

    // Return the maximum count of consecutive 1s found in any window
    return count;
};
