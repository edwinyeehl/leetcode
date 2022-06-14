/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (mid <= right) {
        if (nums[mid] === 0) {
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[right]] = [nums[right], nums[mid]];
            right--;
        } else {
            mid++;
        }
    }
}