/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

var numMatchingSubseq = function(s, words) {
    let count = 0;
    let map = new Map();

    const isSubsequence = (s, word) => {
        if (map.has(word)) return map.get(word);
        let i = -1;

        for (const c of word) {
            i = s.indexOf(c, i + 1);
            if (i === -1) {
                map.set(word, false);
                return false;
            }
        }

        map.set(word, true);
        return true;
    }

    for (const word of words) {
        if (word.length > s.length) continue;

        if (isSubsequence(s, word)) {
            count++;
        }
    }

    return count;
}

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace'])); // 3
console.log(numMatchingSubseq('dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'])); // 2