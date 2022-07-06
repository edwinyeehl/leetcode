/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (mapS[sChar] === undefined) {
            mapS[sChar] = tChar;
        } else if (mapS[sChar] !== tChar) {
            return false;
        }

        if (mapT[tChar] === undefined) {
            mapT[tChar] = sChar;
        } else if (mapT[tChar] !== sChar) {
            return false;
        }
    }

    return true;
}

console.log(isIsomorphic('aab', 'aac'));
console.log(isIsomorphic('badc', 'baba'));
console.log(isIsomorphic('paper', 'title'));