/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(1);
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    debugger;
    return dp[n];
}

console.log(climbStairs(45));
console.log(climbStairs(3));
console.log(climbStairs(4));