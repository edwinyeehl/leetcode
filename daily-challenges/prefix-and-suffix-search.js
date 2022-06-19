/**
 * @param {string[]} words
 */

class WordFilter {
    constructor(words) {
        this.prefix = new Array(27);
        this.suffix = new Array(27);
        let wordSet = new Set();

        for (let i = words.length - 1; i >= 0; i--) {
            let word = words[i];
            let wordLength = word.length;

            if (wordSet.has(word)) {
                continue;
            }

            wordSet.add(word);
            this.insert(word, i, this.prefix, 0, wordLength, 1);
            this.insert(word, i, this.suffix, wordLength - 1, -1, -1);
        }
    }

    insert(word, i, trie, start, end, step) {
        for (let j = start; j !== end; j += step) {
            let char = word.charCodeAt(j) - 97;
            if (!trie[char]) {
                trie[char] = new Array(27);
            }
            trie = trie[char];
            if (!trie[26]) {
                trie[26] = [];
            }
            trie[26].push(i);
        }
    }

    retrieve(word, trie, start, end, step) {
        for (let j = start; j !== end; j += step) {
            let char = word.charCodeAt(j) - 97;
            if (!trie[char]) {
                return [];
            }
            trie = trie[char];
        }

        return trie[26];
    }

    /** 
     * @param {string} prefix 
     * @param {string} suffix
     * @return {number}
     */

    f(pre, suf) {
        let preVals = this.retrieve(pre, this.prefix, 0, pre.length, 1);
        let sufVals = this.retrieve(suf, this.suffix, suf.length - 1, -1, -1);
        let svix = 0;
        let pvix = 0;

        while (svix < sufVals.length && pvix < preVals.length) {
            let sufVal = sufVals[svix];
            let preVal = preVals[pvix];

            if (sufVal == preVal) {
                return sufVal;
            }

            sufVal > preVal ? svix++ : pvix++;
        }
        
        return -1
    }
}

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

const wordFilter = new WordFilter("apple");
console.log(wordFilter.f("a", "e"));
