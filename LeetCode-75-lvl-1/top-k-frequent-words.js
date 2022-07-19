/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function(words, k) {
    const map = new Map();

    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    const arr = Array.from(map.entries());
    arr.sort((a, b) => (b[1] - a[1]? b[1] - a[1] : a[0].localeCompare(b[0])));

    return arr.slice(0, k).map(a => a[0]);
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i", "love"]
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)); // ["the","is","sunny","day"]
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3)); // ["i", "love", "coding"]
