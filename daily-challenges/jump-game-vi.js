/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxResult = function(nums, k) {
    let len = nums.length;
    let deq = [len - 1];
    debugger
    for (let i = len - 2; i >= 0; i--) {
        if (deq[0] - i > k)
            deq.shift();
        
        nums[i] += nums[deq[0]];

        while (deq.length && nums[deq[deq.length - 1]] < nums[i]) {
            deq.pop();
        }

        deq.push(i);
    }

    return nums[0];
}

console.log(maxResult([1, -1, -2, 4, -7, 3], 2));
console.log(maxResult([10, -5, -2, 4, 0, 3], 3));
console.log(maxResult([100, -1, -100, -1, 100], 2));