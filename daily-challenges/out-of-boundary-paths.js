/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @param {Map} memo - optional
 * @return {number}
 */

var findPaths = function(m, n, maxMove, startRow, startColumn, memo = new Map()) {
    const key = maxMove + ',' + startRow + ',' + startColumn;

    if (memo.has(key))
        return memo.get(key);
    
    const isOutside = startRow === -1 || startRow === m || startColumn === -1 || startColumn === n;

    if (maxMove === 0 || isOutside)
        return +isOutside;

    memo.set(key, (
          findPaths(m, n, maxMove - 1, startRow - 1, startColumn, memo)
        + findPaths(m, n, maxMove - 1, startRow + 1, startColumn, memo)
        + findPaths(m, n, maxMove - 1, startRow, startColumn + 1, memo)
        + findPaths(m, n, maxMove - 1, startRow, startColumn - 1, memo)
    ) % 1000000007); // modulo 1000000007 to avoid overflow

    return memo.get(key);
}

console.log(findPaths(1, 3, 3, 0, 1)); // 12
console.log(findPaths(2, 2, 2, 0, 0)); // 6