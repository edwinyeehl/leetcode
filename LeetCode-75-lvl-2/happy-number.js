/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let seen = {};

    const sumOfSquares = (num) => {
        return num.toString().split('').reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
    }

    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }

    return n === 1;
}

console.log(isHappy(19));
console.log(isHappy(2));