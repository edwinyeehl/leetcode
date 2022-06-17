/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    let n = matrix.length;
    const mirror = matrix.map(row => row.slice());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // update element from the mirror instead of the original matrix
            matrix[i][j] = mirror[n - 1 - j][i];
        }
    }

    console.log(matrix);
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);