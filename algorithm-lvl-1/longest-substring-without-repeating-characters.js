/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var map = {};
    var max = 0;
    var start = 0;

    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] || (map[s[i]] !== undefined && map[s[i]] == 0)) {
            start = Math.max(start, map[s[i]] + 1);
        }
        map[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));