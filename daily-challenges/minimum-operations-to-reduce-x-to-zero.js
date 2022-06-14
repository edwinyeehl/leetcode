/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

var minOperations = function(nums, x) {
    const n = nums.length;
    const sum = nums.reduce((r, n) => r + n, 0);
    const target = sum - x;

    let current = 0;
    let ans = -1;
    
    for (let left = 0, right = 0; right < n; right++) {
        current += nums[right];
        
        while (left <= right && current > target) {
            current -= nums[left];
            left++;
        }
        
        if (current === target) {
            ans = Math.max(ans, (right - left + 1));
        }
    }

    return ans === -1 ? -1 : n - ans;
}

console.log(minOperations([1,2,3,4,5,6,7,8,9,10], 6));