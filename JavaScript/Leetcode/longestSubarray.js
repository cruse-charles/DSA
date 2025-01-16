// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75

// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.


var longestSubarray = function(nums) {
    let maxLength = 0; // Initialize the maximum length of the subarray of 1s
    let l = 0; // Left pointer for the sliding window
    let hasZero = false; // Flag to track if a zero has been encountered

    // Iterate through nums with the right pointer (r)
    for (let r = 0; r < nums.length; r++) {
        // If the current element is 0 and we have already encountered a zero
        if (nums[r] === 0 && hasZero) {
            // Move the left pointer to the right until we pass the first zero
            while (hasZero) {
                // If the element at the left pointer is 0, set hasZero to false
                if (nums[l] === 0) {
                    hasZero = false;
                }
                // Move the left pointer to the right
                l++;
            }
        }
        
        // If the current element is 0, set the hasZero flag to true
        if (nums[r] === 0) {
            hasZero = true;
        }

        // Update the maximum length of the subarray of 1s
        maxLength = Math.max(maxLength, r - l);
    }

    // Return the maximum length of the subarray of 1s
    return maxLength;
};