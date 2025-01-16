// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.


var maxVowels = function(s, k) {
    // Create a Set of vowels for fast O(1) lookup
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); 

    // Variables to track the maximum count of vowels and the count in the current window
    let maxVowelCount = 0; 
    let currentCount = 0;

    // Step 1: Process the first window of size k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentCount++; // Increment count for each vowel in the initial window
        }
    }
    maxVowelCount = currentCount; // Set the initial max vowel count

    // Step 2: Slide the window across the rest of the string
    for (let i = k; i < s.length; i++) {
        // Check the character that is sliding out of the window (i - k)
        if (vowels.has(s[i - k])) {
            currentCount--; // Decrement count if the outgoing character is a vowel
        }
        // Check the character that is sliding into the window (i)
        if (vowels.has(s[i])) {
            currentCount++; // Increment count if the incoming character is a vowel
        }
        // Update the maximum vowel count if the current window has more vowels
        maxVowelCount = Math.max(maxVowelCount, currentCount);
    }

    // Return the maximum count of vowels found in any window of size k
    return maxVowelCount;
};
