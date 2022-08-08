/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  debugger;
  if (sum % 2 !== 0) return false;

  const half = sum / 2;
  let dp = [];

  dp[0] = true; // base case

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    for (let j = half; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[half] || false;
};

console.log(canPartition([1, 2, 5])); // false
console.log(canPartition([1, 1, 5, 7])); // true
console.log(canPartition([1, 11, 5, 5])); // true
