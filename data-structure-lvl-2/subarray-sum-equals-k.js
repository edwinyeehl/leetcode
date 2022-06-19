/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    let result = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return result;
}

console.log(subarraySum([1,1,1], 2));
console.log(subarraySum([1,2,3], 3));