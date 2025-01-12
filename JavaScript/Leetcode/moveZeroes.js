// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    // Initialize two pointers: `left` to track the position to place the next non-zero element,
    // and `right` to iterate through the array.
    let left = 0;
    let right = 0;

    // Loop through the array with the `right` pointer.
    while (right < nums.length) {
        // If the current element is not zero, swap it with the element at the `left` pointer.
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++; // Move the `left` pointer to the next position.
        }
        right++; // Move the `right` pointer to the next position.
    }

    // The array is modified in place, so no need to return it.
};