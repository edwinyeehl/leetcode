/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    let count = 0;

    const explore = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        explore(row + 1, col);
        explore(row - 1, col);
        explore(row, col + 1);
        explore(row, col - 1);
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                count++;
                explore(row, col);
            }
        }
    }

    return count;
}

console.log(numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]));
console.log(numIslands([['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]));