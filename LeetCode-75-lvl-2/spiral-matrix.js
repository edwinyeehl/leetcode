/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    if (matrix[0].length === 0) return [];
    
    let result = [];
    // add the first row
    result = result.concat(matrix.shift());
    
    // add las column
    for (let i=0; i<matrix.length-1; i++){
        result.push(matrix[i].pop());
    }
    
    // add last row
    const lastRow = matrix.pop();
    if (lastRow) result = result.concat(lastRow.reverse());

    // add first column
    for (let i=matrix.length-1; i>=0; i--){
        if (matrix[i].length) result.push(matrix[i].shift());
    }
    
    return result.concat(spiralOrder(matrix));
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[7],[9],[6]]));