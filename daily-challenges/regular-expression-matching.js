/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    const pattern = new RegExp('^'+p+'$');
    return pattern.test(s);
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('mn', 'ma?n'))
console.log(isMatch('woman', 'ma?n'))