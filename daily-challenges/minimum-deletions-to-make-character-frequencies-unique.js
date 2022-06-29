/**
 * @param {string} s
 * @return {number}
 */

var minDeletions = function(s) {
    let freq = new Map();
    let used = new Set();
    let count = 0;

    for(const char of s){
        if(freq.has(char)) {
            freq.set(char, freq.get(char)+1);
        } else {
            freq.set(char, 1);
        }
    }

    for(let [char, val] of freq.entries()){
        while(used.has(val) && val > 0){
            val--;
            count++;
        }
        used.add(val);
    }

    return count;
};

console.log(minDeletions("aab"));
console.log(minDeletions("aaabbbcc"));
console.log(minDeletions("ceabaacb"));