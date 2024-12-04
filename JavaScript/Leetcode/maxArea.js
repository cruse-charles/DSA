// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

 


var maxArea = function(height) {
    // Initialize two pointers: l (left) at the beginning of the array 
    // and r (right) at the end of the array
    let l = 0;
    let r = height.length - 1;

    // Initialize maxVol to store the maximum volume found
    let maxVol = 0;

    // Iterate until the two pointers meet
    while (l < r) {
        // Calculate the height of the container formed by the two pointers
        // The height is the smaller of the two values at indices l and r
        const lowerHeight = Math.min(height[l], height[r]);

        // Calculate the current volume using the height and width (r - l)
        const currentVol = lowerHeight * (r - l);

        // Update maxVol to the larger of the current volume or the previous maxVol
        maxVol = Math.max(maxVol, currentVol);

        // Move the pointer that has the smaller height inward

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    // Return the maximum volume found
    return maxVol;
};


