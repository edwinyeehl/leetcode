/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumOperations = function (nums) {
  let set = new Set(nums);
  let count = 0;

  for (const num of Array.from(set)) {
    if (num > 0) {
      count++;
    }
  }

  return count;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));
console.log(minimumOperations([0]));
