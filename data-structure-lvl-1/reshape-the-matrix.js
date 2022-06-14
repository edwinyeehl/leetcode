/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function(mat, r, c) {
    let matLen = mat.length;
    if(matLen * mat[0].length !== r * c) return mat;
    if(matLen === r && mat[0].length === c) return mat;
    
    let tempArr = [], result = [];
    
    for(let i = 0; i < matLen; i++){
        for(let j = 0; j < mat[i].length; j++){
            tempArr.push(mat[i][j]);
            if(tempArr.length === c){
                result.push(tempArr);
                tempArr = [];
            }
        }
    }

    return result;
};

console.log(matrixReshape([[1,2],[3,4]], 1, 4));
console.log(matrixReshape([[1,2],[3,4]], 2, 4));
console.log(matrixReshape([[1,2],[3,4]], 4, 1));