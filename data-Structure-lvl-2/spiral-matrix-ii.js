/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function(n) {
    let result = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let count = 0;
    let size = n * n;
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n -1;

    while (count < size) {
        for (let i = left; i <= right; i++) {
            result[top][i] = ++count;
        }

        top++;

        for (let i = top; i <= bottom; i++) {
            result[i][right] = ++count;
        }

        right--;

        for (let i = right; i >= left; i--) {
            result[bottom][i] = ++count;
        }

        bottom--;

        for (let i = bottom; i >= top; i--) {
            result[i][left] = ++count;
        }

        left++;
    }

    return result;
};

console.log(generateMatrix(3));