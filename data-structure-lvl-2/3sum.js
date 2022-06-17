/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    let result = [];
    
    nums= nums.sort((a, b) => {return a - b});

    for (let i = 0; i < nums.length; i++) {
        // Sum of pos integers will never be = to 0
        if (nums[i] > 0) break;
        
        const target = -nums[i];
        
        let left = i + 1;
        let right = nums.length - 1;
        
        // Avoid duplicates
        if (nums[i] === nums[i - 1])
            continue;
        
        while (left < right) {
            if (nums[left] + nums[right] === target) {
              result.push([nums[i], nums[left], nums[right]]);
                left++;
                // Avoid duplicates
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
            } else if (nums[left] + nums[right] < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));