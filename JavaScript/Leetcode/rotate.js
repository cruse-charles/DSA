var rotate = function(nums, k) {
    // Get the length of the array
    const n = nums.length;

    // Calculate the effective number of rotations needed
    // If k is greater than the length of the array, take k % n to avoid unnecessary rotations
    k = k % n;

    // Create a new array of the same length as nums, initialized with 0s
    const rotated = new Array(n).fill(0);

    // Populate the rotated array with elements from nums at their new positions
    for (let i = 0; i < n; i++) {
        // Calculate the new position for nums[i] and place it in the rotated array
        rotated[(i + k) % n] = nums[i];
    }

    // Copy the elements from the rotated array back into the original nums array
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};