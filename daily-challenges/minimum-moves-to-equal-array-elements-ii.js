/**
 * @param {number[]} nums
 * @return {number}
 */

var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    
    let res = 0;
    let median = nums[Math.floor(nums.length / 2)];
    
    for (let num of nums) {
        res += Math.abs(median - num);
    }

    return res;
}

console.log(minMoves2([1,2,3]));
console.log(minMoves2([1,10,2,9]));
console.log(minMoves2([1,0,0,8,6]));