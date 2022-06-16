/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    let lp = 0;
    let rp = numbers.length - 1;

    while (numbers[lp] + numbers[rp] !== target) {
        if (numbers[lp] + numbers[rp] > target) {
            rp--;
        } else {
            lp++;
        }
    }
    
    return [lp + 1, rp + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
