// https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

const decodeString = s => {
    const stack = []; // Initialize a stack to keep track of characters and numbers

    // Iterate through each character in the input string
    for (const char of s) {
        // If the current character is not a closing bracket, push it onto the stack
        if (char !== "]") { 
            stack.push(char); 
            continue; // Move to the next character
        }
        
        // When a closing bracket is encountered, start decoding
        let cur = stack.pop(); // Pop the top element from the stack
        let str = ''; // Initialize an empty string to build the decoded substring

        // Collect all characters inside the brackets
        while (cur !== '[') { 
            str = cur + str; // Prepend the character to the substring
            cur = stack.pop(); // Continue popping from the stack
        }

        // After exiting the loop, `cur` is '[' and has been popped
        let num = ''; // Initialize an empty string to build the multiplier
        cur = stack.pop(); // Pop the next element, which should be part of the number

        // Collect all digits for the multiplier
        while (!Number.isNaN(Number(cur))) { 
            num = cur + num; // Prepend the digit to the multiplier
            cur = stack.pop(); // Continue popping from the stack
        }

        // Push back the last non-digit character (if any) onto the stack
        stack.push(cur);

        // Repeat the decoded substring `num` times and push it back onto the stack
        stack.push(str.repeat(Number(num)));
    }

    // Join all elements in the stack to form the final decoded string
    return stack.join('');
};