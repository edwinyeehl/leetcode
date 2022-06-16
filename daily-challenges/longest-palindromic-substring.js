/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    // left index of the longest palindrome
    let left = 0;
    // right index of the longest palindrome
    let right = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j of [i, i + 1]) {
            // check if the substring is a palindrome [l, ..., i, j, ..., r]
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
                // update the left and right indices if the current substring is longer than the current longest palindrome
                [left, right] = (r - l + 1) > (right - left + 1) ? [l, r] : [left, right];
            }
        }
    }

    return s.substring(left, right + 1);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));