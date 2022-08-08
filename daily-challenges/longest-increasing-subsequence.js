/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0 || nums === null) return 0;
  if (nums.length === 1) return 1;

  let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);

  const helper = (target, hi) => {
    let lo = 0;

    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);

      if (dp[mid] === target) return mid;
      else if (dp[mid] > target) hi = mid - 1;
      else lo = mid + 1;
    }

    return lo;
  };

  for (let i = 0; i < nums.length; i++) {
    let index = helper(nums[i], i);
    dp[index] = nums[i];
  }

  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] !== Number.MAX_SAFE_INTEGER) return i + 1;
  }

  return 0;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
