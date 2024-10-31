// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
// Return the highest altitude of a point.


var largestAltitude = function(gain) {
    // Initialize an array `result` with an initial altitude of 0
    const result = [0]

    // Loop through each element `num` in the `gain` array
    for (let num of gain) {
        // Get the last altitude in the `result` array (the most recent altitude reached)
        const lastResultIndex = result.length - 1

        // Calculate the current altitude by adding the current gain `num` to the last altitude
        const currentAlt = num + result[lastResultIndex]

        // Append the new altitude to the `result` array
        result.push(currentAlt)
    }

    // Return the maximum altitude found in the `result` array
    return Math.max(...result)
};