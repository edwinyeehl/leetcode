/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    if (!nums || !nums.length) return -1;

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > nums[start]) {
            if (nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < nums[end]) {
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else break;
    }

    return nums[end] === target ? end : -1;
}

const sampleNums = [4,5,6,7,0,1,2];

console.log(search(sampleNums, 0));
console.log(search(sampleNums, 3));