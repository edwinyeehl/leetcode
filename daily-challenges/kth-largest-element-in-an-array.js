/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1]; // return the k - 1 largest element of the array
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));