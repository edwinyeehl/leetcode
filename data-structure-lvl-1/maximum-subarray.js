/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let curSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum+nums[i]);
        maxSum = Math.max(curSum, maxSum);
    }
    
    return maxSum;
};