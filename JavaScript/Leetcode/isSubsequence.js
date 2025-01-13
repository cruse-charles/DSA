// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


var isSubsequence = function(s, t) {
    // Initialize a pointer for the subsequence string `s`.
    let sPointer = 0;

    // Iterate through the target string `t`.
    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        // If the current character in `s` matches the current character in `t`,
        // move the `sPointer` to the next character in `s`.
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
    }

    // If `sPointer` has reached the length of `s`, it means all characters in `s`
    // have been found in `t` in the correct order, so return true.
    return sPointer === s.length;
};