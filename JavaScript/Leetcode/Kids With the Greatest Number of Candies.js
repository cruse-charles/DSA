// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    // Find the maximum number of candies any kid currently has
    const maxCandies = Math.max(...candies)
    const result = []

    // Loop through each kid's candies count
    for (let i = 0; i < candies.length; i++) {
        // Check if the current kid's candies + extraCandies is at least the maximum
        if (candies[i] + extraCandies >= maxCandies) {
            // If true, this kid can have the most candies, add true to the result arrays
            result.push(true)
        } else {
            // Otherwise, add false to the result arrays
            result.push(false)
        }
    }

    return result
};