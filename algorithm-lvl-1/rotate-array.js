/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    for (let i = nums.length - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
  
    for (let j = k - 1; j >= 0; j--) {
        nums[j] = nums.pop();
    }

    // self-check to make sure the array is rotated
    console.log(nums);
}

rotate([1,2,3,4,5,6,7], 3);