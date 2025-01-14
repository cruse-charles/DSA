// https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

// Example 1:


// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:


// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

var equalPairs = function(grid) {
    const n = grid.length; // Get the size of the matrix (n x n)
    const rowMap = {}; // Initialize an object to store the frequency of each row

    // Iterate through each row in the matrix
    for (let i = 0; i < n; i++) {
        // Convert the row to a string to use as a key in the rowMap
        const row = grid[i].join(',');
        // Increment the count for this row in the rowMap
        rowMap[row] = (rowMap[row] || 0) + 1;
    }

    let count = 0; // Initialize a counter to track the number of valid row-column pairs

    // Iterate through each column in the matrix
    for (let j = 0; j < n; j++) {
        const col = []; // Initialize an array to store the current column
        // Collect the elements of the current column
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        // Convert the column to a string to use as a key for comparison
        const colStr = col.join(',');
        // If the column string exists in the rowMap, add its frequency to the count
        if (rowMap[colStr]) {
            count += rowMap[colStr];
        }
    }

    return count; // Return the total number of valid row-column pairs
};

// Example usage:
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]])); // Output: 1
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // Output: 3