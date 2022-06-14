/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    var map = {};
    var max = 0;
    var start = 0;
    var end = 0;
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            start = i;
            break;
        }
    }
    for (var i = s.length - 1; i >= 0; i--) {
        if (map[s[i]] === 1) {
            end = i;
            break;
        }
    }
    for (var i = start; i <= end; i++) {
        if (map[s[i]] === 1) {
            max = Math.max(max, end - start + 1);
            break;
        }
    }
    return s.slice(start, end + 1);
};

console.log(longestPalindrome('babad'));