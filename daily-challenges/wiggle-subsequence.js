/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function(nums) {
    let lastDiff = 0;
    let maxLen = 1;
    
    for (let i = 1; i < nums.length; i++) {
        let diff = nums[i] - nums[i - 1];

        if (lastDiff == 0 && diff !== 0) {
          lastDiff = diff; // first diff
          maxLen++;
        } else {
          if (lastDiff > 0 && diff < 0 || lastDiff < 0 && diff > 0) {
            lastDiff = diff;
            maxLen++;
          } // there is no else, we will ignore incompatible cases
        }
    }

    return maxLen;
}


console.log(wiggleMaxLength([1,7,4,9,2,5]));
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]));