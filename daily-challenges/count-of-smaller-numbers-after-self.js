/**
 * @param {number[]} nums
 * @return {number[]}
 */

// if you do for i, for j loop, it will return Time Limit Exceeded error.
var countSmaller = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    
    let counts = [0];
    let orderedNums = [nums[nums.length - 1]];

    const binarySearch = (target) => {
        let left = 0;
        let right = orderedNums.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (target > orderedNums[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        orderedNums.splice(left, 0, target);

        return left;
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        let count = binarySearch(nums[i]);
        counts.unshift(count);
    }

    return counts;
}

console.log(countSmaller([5,2,6,1]))
console.log(countSmaller([-1]))
console.log(countSmaller([-1,-1]))