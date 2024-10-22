// https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75

// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

var asteroidCollision = function(asteroids) {
    const stack = []; // Initialize a stack to keep track of asteroids that survive collisions

    // Iterate through each asteroid in the input array
    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i]; // Current asteroid being processed
        let top = stack[stack.length - 1]; // The asteroid at the top of the stack (last added)

        // If the stack is empty, the current asteroid is moving right, or the top of the stack is moving left
        // (no collision possible), push the current asteroid onto the stack
        if (!stack.length || curr > 0 || top < 0) {
            stack.push(curr);
        } 
        // If the current asteroid and the top of the stack have the same size but opposite directions,
        // both asteroids explode (remove the top of the stack)
        else if (Math.abs(curr) === Math.abs(top)) {
            stack.pop(); // Remove the top asteroid from the stack
        } 
        // If the current asteroid is larger in size than the top of the stack, the top asteroid explodes
        else if (Math.abs(curr) > Math.abs(top)) {
            stack.pop(); // Remove the smaller asteroid from the stack
            i--; // Reprocess the current asteroid (it may collide with the next asteroid in the stack)
        }
    }

    // Return the stack, which contains the asteroids that survived all collisions
    return stack;
};