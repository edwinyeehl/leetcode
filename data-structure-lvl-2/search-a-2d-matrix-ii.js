/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const findTarget = (startRow, endRow, startCol, endCol) => {
        if (startRow > endRow || startCol > endCol) return false;

        const midRow = Math.floor((endRow - startRow) / 2) + startRow;
        const midCol = Math.floor((endCol - startCol) / 2) + startCol;

        const midVal = matrix[midRow][midCol];

        if (midVal === target) return true;

        if (midVal > target) {
            return findTarget(startRow, endRow, startCol, midCol - 1) || findTarget(startRow, midRow - 1, midCol, endCol);
        } else {
            return findTarget(midRow + 1, endRow, startCol, endCol) || findTarget(startRow, midRow, midCol + 1, endCol);
        }
    }

    return findTarget(0, rows - 1, 0, cols - 1);
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 45));