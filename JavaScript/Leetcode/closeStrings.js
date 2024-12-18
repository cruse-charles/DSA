// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.


// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

var closeStrings = function(word1, word2) {
    // If the lengths of the words are not the same, they can't be close
    if (word1.length !== word2.length) return false;

    // Create frequency maps for both words
    // stringCountHash("cabbba") -> { c: 1, a: 2, b: 3 }
    const w1Hash = stringCountHash(word1);
    const w2Hash = stringCountHash(word2);

    // Check if both words have the exact same set of unique characters
    // Example: { 'c', 'a', 'b' }
    const w1Chars = new Set(Object.keys(w1Hash)); 
    const w2Chars = new Set(Object.keys(w2Hash));
    if (w1Chars.size !== w2Chars.size || [...w1Chars].some(char => !w2Chars.has(char))) {
        return false;
    }

    // Extract frequency values for both words
    // Example: [1, 2, 3]
    const w1Counts = Object.values(w1Hash).sort((a, b) => a - b);
    const w2Counts = Object.values(w2Hash).sort((a, b) => a - b);

    // Check if the sorted frequency arrays are identical
    return w1Counts.join(",") === w2Counts.join(",");
};

// Helper function to create a frequency map for a string
// A map where keys are characters and values are their frequencies

const stringCountHash = (word) => {
    const wordHash = {};
    for (let char of word) {
        wordHash[char] = (wordHash[char] || 0) + 1;
    }
    return wordHash;
};