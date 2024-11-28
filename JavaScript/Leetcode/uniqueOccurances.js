// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

/**
 * @param {number[]} arr - An array of integers
 * @return {boolean} - True if all occurrence counts are unique, otherwise false
 */
var uniqueOccurrences = function(arr) {
    // Create an object to store the occurrence count of each number
    const hash = {};

    // Count occurrences of each number in the array
    for (let num of arr) {
        if (num in hash) {
            // If the number already exists in the hash, increment its count
            hash[num] += 1;
        } else {
            // Otherwise, initialize its count to 1
            hash[num] = 1;
        }
    }

    // Get all the occurrence counts from the hash object
    const occurances = Object.values(hash);

    // Create a set to track unique occurrence counts
    const checkOccurances = new Set();

    // Iterate through the occurrence counts
    for (let num of occurances) {
        // If a count is already in the set, it's a duplicate, so return false
        if (checkOccurances.has(num)) return false;

        // Otherwise, add the count to the set
        checkOccurances.add(num);
    }

    // If all counts are unique, return true
    return true;
};
