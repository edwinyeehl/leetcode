/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumUniqueSubarray = function(nums) {
    const n = nums.length;
    let set = new Set();
    let i = 0, j = 0, sum = 0, max = 0;

    while (i < n && j < n) {
        if (!set.has(nums[j])) {
            set.add(nums[j]);
            sum += nums[j];
            max = Math.max(max, sum);
            j++;
        } else {
            sum -= nums[i];
            set.delete(nums[i]);
            i++;
        }
    }

    return max;
}

console.log(maximumUniqueSubarray([4,2,4,5,6]));