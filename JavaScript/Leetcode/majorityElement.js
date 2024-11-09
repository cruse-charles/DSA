// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    // Initialize a hash map to store the count of each number
    const hash = {};

    // Variable to track the highest count of any number
    let currentMaxCount = 0;

    // Variable to track the number with the highest count
    let maxNum = 0;

    // Iterate through each number in the input array
    for (let num of nums) {
        // Increment the count for the current number in the hash map
        // If the number is not already in the hash map, initialize it to 0 and then add 1
        hash[num] = (hash[num] || 0) + 1;

        // Check if the count of the current number is greater than the current maximum count
        if (hash[num] > currentMaxCount) {
            // Update the number with the highest count
            maxNum = num;

            // Update the highest count
            currentMaxCount = hash[num];
        }
    }

    // Return the number with the highest count
    return Number(maxNum);
};