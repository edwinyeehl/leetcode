/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

var pacificAtlantic = function (heights) {
  if (heights.length === 0) return [[]];

  const dfs = (i, j, visited, ocean) => {
    if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1) return;

    if (heights[i][j] < visited) return;

    if (ocean[i][j]) return;

    ocean[i][j] = true;

    dfs(i + 1, j, heights[i][j], ocean);
    dfs(i - 1, j, heights[i][j], ocean);
    dfs(i, j + 1, heights[i][j], ocean);
    dfs(i, j - 1, heights[i][j], ocean);
  };

  const rows = heights.length;
  const cols = heights[0].length;

  let pacific = [];
  let atlantic = [];

  for (let i = 0; i < rows; i++) {
    pacific.push(new Array(cols).fill(false));
    atlantic.push(new Array(cols).fill(false));
  }

  for (let col = 0; col < cols; col++) {
    dfs(0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(rows - 1, col, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for (let row = 0; row < rows; row++) {
    dfs(row, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(row, cols - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  let result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

// test case
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
