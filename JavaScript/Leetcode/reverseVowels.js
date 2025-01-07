// https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1533366890/?envType=study-plan-v2&envId=leetcode-75

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".


var reverseVowels = function(s) { 
    // Convert string into an array to allow for in-place modifications.
    let array = s.split('');
    
    // Initialize two pointers, one at the start (l) and one at the end (r).
    let l = 0;
    let r = array.length - 1;

    // Define a set of vowels for quick lookup.
    const vowels = new Set('AEIOUaeiou');

    // Use a two-pointer approach to swap vowels.
    while (l < r) {
        // Move left pointer forward if it's not pointing to a vowel.
        if (!vowels.has(array[l])) {
            l++;
            continue;  // Skip rest of the loop and re-evaluate conditions.
        }

        // Move right pointer backward if it's not pointing to a vowel.
        if (!vowels.has(array[r])) {
            r--;
            continue;  // Skip rest of the loop and re-evaluate conditions.
        }

        // Both pointers are on vowels, so swap them.
        [array[l], array[r]] = [array[r], array[l]];

        // Move both pointers towards the center.
        l++;
        r--;
    }

    // Convert the array back into a string and return.
    return array.join('');
};