/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(nums[i], nums[i] * max, nums[i] * min);
    min = Math.min(nums[i], nums[i] * temp, nums[i] * min);
    res = Math.max(res, max);
  }

  return res;
};

console.log(maxProduct([2, 7, -9, 3, 1])); // 14
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
