/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    let max = 0;
    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    debugger
    for (let key in map) {
        if (map[key] % 2 === 0) {
            max += map[key];
        } else if (map[key] % 2 === 1) {
            if (max % 2 === 0) {
                max += map[key];
            } else {
                max += map[key] - 1;
            }
        }
    }

    return max;
}

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));