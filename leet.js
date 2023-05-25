// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
    const pair = []

    for(i=0; i < nums.length - 1; i++) {
        for(j=1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                pair.push(i)
                pair.push(j)
            }
        }
    }
    console.log(pair)
    // return pair
}

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false


const anagrams = (str1, str2) => {
    const hash1 = {}

    str1.split("").forEach((letter) => {
        if(!hash1[letter]) hash1[letter] = 0;
        hash1[letter] += 1
    })

    str2.split("").forEach((letter) => {
        if(!hash1[letter]) hash1[letter] = 0
        hash1[letter] -= 1
    })


    console.log(Object.values(hash1).every((letter) => letter == 0))
}

anagrams('listen', 'silent')
anagrams('listen', 'potato')

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// given head of a linked list and an interger k, assuming the link list is 1-indexed, delete the kth node from the end of that link list.
// Ex 1: input: head = [1,2,3,4,5], k = 2
// output: [1,2,3,5]

// ex 2: input: head = [7.9,6,6,7,8,3,0,9,5], k = 5
// output = [7,9,6,6,7,3,0,9,5]

// try to solve it in one pass

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const removeKthFromEnd = (head, k) => {
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
  
    // Move fast pointer k positions ahead
    for (let i = 0; i <= k; i++) {
      fast = fast.next;
    }
  
    // Move both pointers together until fast reaches the end
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  
    // Remove the kth node
    slow.next = slow.next.next;
  
    return dummy.next;
  };
  
  // Helper function to convert linked list to array
  const convertLinkedListToArray = (head) => {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
};
  
// Example usage:
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log(convertLinkedListToArray(removeKthFromEnd(head1, 2)));


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const uncompress = (s) => {
  let result = [];
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count += 1) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join('');
};