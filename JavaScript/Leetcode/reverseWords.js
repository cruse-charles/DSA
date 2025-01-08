// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"



/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Trim leading and trailing whitespace from the string and split it into words by spaces
    const wordsArray = s.trim().split(' '); 
    const resultsArray = [];

    // Iterate through the words array
    for (let word of wordsArray) {
        // Only add non-empty strings to the results array
        if (word !== '') {
            resultsArray.push(word);
        }
    }

    // Reverse the array of words
    resultsArray.reverse();

    // Join the reversed words with a single space and return the result
    return resultsArray.join(' ');
};



// Alternative answer

var reverseWords = function(s) {
    // Trim leading and trailing spaces from the string.
    // Split the string into an array of words using space as a delimiter.
    // This creates empty strings for multiple consecutive spaces.
    const words = s.trim().split(' ');  
    const reversedWords = [];  

    // Iterate through the words array in reverse order.
    for (let i = words.length - 1; i >= 0; i--) {
        // Skip empty strings caused by multiple spaces in the original input.
        if (words[i] !== '') reversedWords.push(words[i]);
    }

    // Join the words back into a string with a single space between each word.
    return reversedWords.join(' ');
};