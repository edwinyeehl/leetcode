/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var findBall = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let result = [];

    for (let start = 0; start < n; start++) {
        let j = start;

        for (let i = 0; i < m; i++) {
            let direction = grid[i][j];

            if (direction === grid[i][j + direction]) {
                j += direction;
            } else {
                i = m;
                j = -1;
            }
        }

        result[start] = j;
    }

    return result;
};

console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]));
console.log(findBall([[-1]]));
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]));
