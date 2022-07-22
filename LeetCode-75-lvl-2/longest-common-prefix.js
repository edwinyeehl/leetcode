/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0)
        return '';

    let prefix = '';
    const maxLen = Math.min(...strs.map(s => s.length));

    for (let i = 0; i < maxLen; i++) {
        let char = strs[0][i];

        if (strs.every(s => s[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));