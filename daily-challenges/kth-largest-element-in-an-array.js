/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    
    for (let i = 0; i < k - 1; i++) {
        nums.shift(); // shift removes the first element of the array
    }

    return nums[0]; // return the first element of the array
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));