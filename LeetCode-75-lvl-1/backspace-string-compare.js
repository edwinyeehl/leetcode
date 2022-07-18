/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function(s, t) {
    const process = (str) => {
        let res = '';
        for (let char of str) {
            if (char === '#') {
                res = res.slice(0, -1);
            } else {
                res += char;
            }
        }
        return res;
    }

    return process(s) === process(t);
}

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false