/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }

    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 45));