// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75



// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

 

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.



var maxOperations = function(nums, k) {
    // Initialize two pointers: l (left) at the start of the array
    // and r (right) at the end of the array after sorting
    let l = 0;
    let r = nums.length - 1;

    // Initialize a counter to track the number of valid operations
    let count = 0;

    // Sort the array to enable two-pointer traversal
    nums.sort((a, b) => a - b);

    // Traverse the array until the two pointers meet
    while (l < r) {
        // Calculate the sum of the elements at the two pointers
        const sum = nums[l] + nums[r];

        if (sum === k) {
            // If the sum equals k, a valid operation is found
            count++;
            l++; // Move the left pointer inward
            r--; // Move the right pointer inward
        } else if (sum > k) {
            // If the sum is greater than k, move the right pointer inward
            // This decreases the sum since the array is sorted
            r--;
        } else {
            // If the sum is less than k, move the left pointer inward
            // This increases the sum
            l++;
        }
    }

    // Return the total number of valid operations
    return count;
};