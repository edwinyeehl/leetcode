/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    var values = [];
    
    for (var i=0; i < nums.length; i++) {
        let curValue = nums[i];
        if (values.indexOf(curValue) !== -1) {
            return true;
        }
        values.push(curValue);
    }
    
    return false;
}