/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    // simplest solution
    // return nums.indexOf(target) === -1 ? [-1, -1] : [nums.indexOf(target), nums.lastIndexOf(target)];

    // lengthy solution
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(2).fill(-1);

    if (right < 0) return result;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    if (nums[left] !== target) return result;

    result[0] = left;

    right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (nums[left] === target) {
        result[1] = left;
    } else {
        result[1] = left - 1;
    }

    return result;
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([4,5,5,7,7,8,8,8,10,11], 8));
console.log(searchRange([], 6));