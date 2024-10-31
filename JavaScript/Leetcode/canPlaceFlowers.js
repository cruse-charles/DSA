// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


var canPlaceFlowers = function(flowerbed, n) {
    // Initialize a counter to track the number of new flowers that can be planted
    let count = 0

    // Check the current plot (flowerbed[i]) and the plots immediately before and after
    for (let i = 0; i < flowerbed.length; i++) {
        let prev = flowerbed[i-1]
        let curr = flowerbed[i]
        let next = flowerbed[i+1]


        // Check if:
        // 1. There is no flower in the previous plot (prev is undefined or 0),
        // 2. The current plot is empty (curr === 0), and
        // 3. There is no flower in the next plot (next is undefined or 0).
        if (!prev && curr === 0 && !next ) {
            count++
            
            // Move the index forward by one to skip checking the next plot,
            // as we can't plant a flower adjacent to this newly planted one, we aren't changing the flowerbed array
            i++;
        }
    }

    return count >= n
};