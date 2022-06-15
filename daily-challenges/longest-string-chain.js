/**
 * @param {string[]} words
 * @return {number}
 */

var longestStrChain = function(words) {
    let memory = {};
    words.sort((a, b) => a.length - b.length);

    for (let word of words) {
        debugger;
        let longest = 0;

        for (let i = 0; i < word.length; i++) {
            let prefix = word.slice(0, i) + word.slice(i + 1);
            longest = Math.max(longest, (memory[prefix] || 0) + 1);
        }

        memory[word] = longest;
    }

    return Math.max(...Object.values(memory));
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));