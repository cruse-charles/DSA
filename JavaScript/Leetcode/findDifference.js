// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

var findDifference = function(nums1, nums2) {
    // Create sets to store unique elements from nums1 and nums2
        // set1 = [1,2,3], set2 = [2,4,6]
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)


    // iterate set 1, if num found in set2, remove from both
        // set1 = [1,3], set2 = [4,6] 
    set1.forEach((num) => {
        if (set2.has(num)) {
            set1.delete(num)
            set2.delete(num)
        }
    })
    
    // create arrays from sets
    const array1 = [...set1]
    const array2 = [...set2]

    return [array1, array2]
};
