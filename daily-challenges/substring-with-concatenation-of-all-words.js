/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordCounts = new Map();
  let totalCount = 0;
  const wordLength = words[0].length;

  for (let word of words) {
    if (wordCounts.has(word)) {
      wordCounts.set(word, wordCounts.get(word) + 1);
    } else {
      wordCounts.set(word, 1);
    }
    totalCount++;
  }

  let res = [];

  const search = (index, used, matched) => {
    if (matched === totalCount) return true;
    if (index >= s.length) return false;

    const word = s.substring(index, index + wordLength);

    if (wordCounts.has(word)) {
      if (!used.has(word)) {
        used.set(word, 1);
      } else if (used.get(word) < wordCounts.get(word)) {
        used.set(word, used.get(word) + 1);
      } else {
        return false;
      }

      return search(index + wordLength, used, matched + 1);
    }

    return false;
  };

  for (let i = 0; i < s.length; i++) {
    if (search(i, new Map(), 0)) {
      res.push(i);
    }
  }

  return res;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // [0, 9]
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
); // []
console.log(findSubstring("barfoofoobarthefoobarman", ["foo", "bar", "the"])); // [6, 9, 12] ]
