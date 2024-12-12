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
    // Initialize pointers for the sliding window
    let l = 0; // Left boundary of the window
    let r = 0; // Right boundary of the window
    let hasDeleted = false; // Tracks if a 0 has been deleted
    let maxSubarrayLength = 0; // Maximum length of the subarray of 1s

    // Traverse the array with the right pointer
    while (r < nums.length) {
        // If the current element is 0 and we haven't deleted any 0s yet, mark it as deleted
        if (nums[r] === 0) {
            if (!hasDeleted) {
                // Mark the current 0 as deleted
                hasDeleted = true;
            } else {
                // If a 0 has already been deleted, shrink the window from the left
                while (nums[l] !== 0) {
                    // Move the left pointer past all 1s
                    l++;
                }
                // Skip the 0 to maintain a single deletion
                l++;
            }
        }

        // Update the maximum subarray length (excluding the 0 we delete)
        maxSubarrayLength = Math.max(maxSubarrayLength, r - l);

        // Expand the window by moving the right pointer
        r++;
    }

    // Return the maximum subarray length
    return maxSubarrayLength;
};
