/**
 * @param {number[]} nums
 * @return {boolean}
 */

var checkPossibility = function(nums) {
    debugger;
    for (let i = 1, err = 0; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) {
            if (err++ || (i > 1 && i < nums.length - 1 && nums[i-2] > nums[i] && nums[i+1] < nums[i-1])) {
                return false;
            }
        }
    }
    return true;
}

console.log(checkPossibility([4,2,3]));
console.log(checkPossibility([3,2,1]));
console.log(checkPossibility([3,4,2,3])); // test case came after submission