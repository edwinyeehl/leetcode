/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let pivot = -1;

    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }

        for (let j = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }

        if (leftSum === rightSum) {
            pivot = i;
            break; // only take the 1st pivot
        }
    }

    return pivot;
}

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
console.log(pivotIndex([-1,-1,0,0,-1,-1]));