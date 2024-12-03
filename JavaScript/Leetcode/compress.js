// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. 
// Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

/**
 * Compresses a character array in-place and returns the new length.
 * @param {character[]} chars - Input array of characters to compress.
 * @return {number} - Length of the compressed array.
 */
var compress = function(chars) {
    // `currentLetter` stores the current character being counted.
    let currentLetter = chars[0];
    // `currentIndex` points to the position where the next character or count will be written.
    let currentIndex = 0;
    // `count` keeps track of how many times `currentLetter` appears consecutively.
    let count = 0;

    // Loop through the array and include an extra iteration to handle the last group.
    for (let i = 0; i <= chars.length; i++) {
        // If the current character matches `currentLetter`, increment `count`.
        if (chars[i] === currentLetter) {
            count++;
        } else {
            // Write `currentLetter` at `currentIndex` and move the index forward.
            chars[currentIndex] = currentLetter;
            currentIndex++;

            // If `count > 1`, write its digits to the array.
            if (count > 1) {
                // Convert `count` to a string and iterate through its digits.
                let countStr = count.toString();
                for (let digit of countStr) {
                    chars[currentIndex] = digit; // Write each digit as a character.
                    currentIndex++;
                }
            }

            // Update `currentLetter` to the new character.
            currentLetter = chars[i];
            // Reset `count` to 1 for the new group.
            count = 1;
        }
    }

    // Return the length of the compressed array, which is `currentIndex`.
    return currentIndex;
};
