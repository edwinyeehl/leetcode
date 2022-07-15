/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;

    const explore = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
            return 0;

        if (grid[row][col] === 0)
            return 0;

        grid[row][col] = 0;
        
        return 1 + explore(row + 1, col) + explore(row - 1, col) + explore(row, col + 1) + explore(row, col - 1);
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                maxArea = Math.max(maxArea, explore(row, col));
            }
        }
    }

    return maxArea;
}

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));
