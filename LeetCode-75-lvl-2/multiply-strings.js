/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

var multiply = function(num1, num2) {
    const dp = new Array(num1.length + num2.length).fill(0);
    
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const mul = num1[i] * num2[j];
            const sum = mul + dp[i + j + 1];
            dp[i + j] += Math.floor(sum / 10);
            dp[i + j + 1] = sum % 10;
        }
    }

    let index = 0;

    while (dp[index] === 0) {
        dp.shift();
    }

    if (!dp.length) return '0';

    return dp.join('');
}

console.log(multiply('123', '456'));