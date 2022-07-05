/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) return 0;

    const set = new Set(nums);
    let max = 0;

    for (let num of set) {
        if (set.has(num - 1)) {
            continue;
        }

        let curNum = num;
        let curLen = 1;

        while (set.has(curNum + 1)) {
            curNum += 1;
            curLen += 1;
        }

        max = Math.max(max, curLen);
    }

    return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));