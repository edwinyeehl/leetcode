/**
 * @param {string[]} words
 * @return {number}
 */

var minimumLengthEncoding = function(words) {
    const trie = {};
    const leavesMap = new Map();

    for (let word of words) {
        let node = trie;

        for (let i = word.length - 1; i >= 0; i--) {
            const char = word[i];

            if (!node[char]) {
                node[char] = {};
            }

            node = node[char];
        }

        leavesMap.set(node, word.length);
    }

    let result = 0;

    leavesMap.forEach((value, node) => {
        if (Object.keys(node).length === 0) {
            result += value + 1;
        }
    });

    return result;
}

console.log(minimumLengthEncoding(["time", "me", "bell"]));
console.log(minimumLengthEncoding(["t"]));