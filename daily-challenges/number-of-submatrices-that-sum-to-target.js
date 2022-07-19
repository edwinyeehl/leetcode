/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */

var numSubmatrixSumTarget = function(matrix, target) {
    const xlen = matrix[0].length;
    const ylen = matrix.length;
    let count = 0;
    let res = new Map();
    let curSum = 0;

    for (let i = 0, r = matrix[0]; i < ylen; r = matrix[++i]) {
        for (let j = 1; j < xlen; j++) {
            r[j] += r[j-1];
        }
    }

    for (let i = 0; i < xlen; i++) {
        for (let j = i; j < xlen; j++) {
            res.clear();
            res.set(0, 1);
            curSum = 0;
            
            for (let k = 0; k < ylen; k++) {
                curSum += matrix[k][j] - (i > 0 ? matrix[k][i - 1] : 0);
                const pre = res.get(curSum - target) || 0;
                count += pre;
                res.set(curSum, (res.get(curSum) || 0) + 1);
            }
        }
    }

    return count;
}

console.log(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0)); // 4
console.log(numSubmatrixSumTarget([[1,-1],[-1,1]], 0)); // 5