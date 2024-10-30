// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
    // Calculate the maximum length between word1 and word2
    const maxLength = Math.max(word1.length, word2.length)
    let result = ''
    
    // Calculate the maximum length between word1 and word2
    for (let i = 0; i < maxLength; i++) {
        // Check if there is a character in word1/2 at index i
        // If true, add that character to the result string
        if (i < word1.length) result += word1[i]
        if (i < word2.length) result += word2[i]
    }


    return result

    // Other


    // let merged = [];

    // for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    //     if (i < word1.length) {
    //         merged.push(word1[i]);
    //     }
        
    //     if (i < word2.length) {
    //         merged.push(word2[i]);
    //     }
    // }

    // return merged.join("");   
};
