// https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


var pivotIndex = function(nums) {
    // Calculate the total sum of all elements in the `nums` array
    const sum = nums.reduce((a, b) => a + b);

    // Initialize a variable `leftSum` to track the sum of elements to the left of the current index
    let leftSum = 0;

    // Loop through each element in the `nums` array to check if there is a valid pivot index
    for (let i = 0; i < nums.length; i++) {
        // Check if the sum of elements on the left is equal to the sum of elements on the right
        // The sum on the right is calculated as: total sum - leftSum - nums[i] (current element)
        if (leftSum === sum - leftSum - nums[i]) {
            return i; // Return the current index `i` if it's a valid pivot index
        }

        // Update the `leftSum` by adding the current element `nums[i]`
        leftSum += nums[i];
    }

    // If no pivot index is found, return -1
    return -1;
};

