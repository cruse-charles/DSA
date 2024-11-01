var merge = function(nums1, m, nums2, n) {
    // Initialize three pointers:
    // `n1RightPointer` points to the last position in nums1 (index m + n - 1),
    // where the merged elements will be placed.
    let n1RightPointer = nums1.length - 1;

    // `n1EvalPointer` points to the last valid element in nums1 (index m - 1),
    // which is the largest element in the valid portion of nums1.
    let n1EvalPointer = m - 1;

    // `n2EvalPointer` points to the last element in nums2 (index n - 1),
    // which is the largest element in nums2.
    let n2EvalPointer = n - 1;

    // Iterate while there are still elements in nums2 to merge.
    // We only need to check nums2 because all elements from nums1 are already in place.
    while (n2EvalPointer >= 0) {
        // If nums1[n1EvalPointer] is greater than nums2[n2EvalPointer],
        // place nums1[n1EvalPointer] at position `n1RightPointer` in nums1.
        if (n1EvalPointer >= 0 && nums1[n1EvalPointer] > nums2[n2EvalPointer]) {
            nums1[n1RightPointer] = nums1[n1EvalPointer]; // Copy the larger element from nums1.
            n1EvalPointer--; // Move the pointer in nums1 to the left (to the next largest element).
        } else {
            // Otherwise, place nums2[n2EvalPointer] at position `n1RightPointer` in nums1.
            nums1[n1RightPointer] = nums2[n2EvalPointer]; // Copy the element from nums2.
            n2EvalPointer--; // Move the pointer in nums2 to the left (to the next element in nums2).
        }
        n1RightPointer--; // Move the pointer in nums1 to the left (to the next position to fill).
    }
};