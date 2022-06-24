/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    if (target.length === 1 && target[0] !== 1)
        return false;
        
    let sum = target.reduce((a, b) => a + b);
    target.sort((a, b) => b - a);
    debugger;

    while (sum!= target.length) {
        let temp = target[0] - (sum - target[0]) * (Math.trunc(target[0]  / (sum - target[0]) - 1) || 1);
        [sum, target[0]] = [sum - target[0] + temp, temp];

        if (target[0] < 1)
            return false;
        
        for (let i = 0; target[i] < target[i+1]; i++) {
          [target[i], target[i+1]] = [target[i+1], target[i]];
        }
    }

    return true;
}

console.log(isPossible([9,3,5]));
console.log(isPossible([1,1,1,2]));
console.log(isPossible([8,5]));