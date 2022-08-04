/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = (nums) =>
  nums.reduce((p, n) => [p[1], Math.max(p[0] + n, p[1])], [0, 0])[1];

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
