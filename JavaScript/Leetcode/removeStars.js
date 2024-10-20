// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.
 

// Example 1:

// Input: s = "leet**cod*e"
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".
// Example 2:

// Input: s = "erase*****"
// Output: ""
// Explanation: The entire string is removed, so we return an empty string.


var removeStars = function(s) {
    // Initialize an empty stack to keep track of characters
    const stack = [];

    // Iterate through each character in the string
    for (let char of s) {
        // If the current character is a '*', remove the last character from the stack
        if (char === '*') {
            stack.pop(); // Removes the most recently added character (closest non-star character)
        } else {
            // If the current character is not a '*', add it to the stack
            stack.push(char);
        }
    }

    // Join the characters in the stack to form the resulting string and return it
    return stack.join('');
};