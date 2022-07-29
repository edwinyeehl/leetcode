/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

var findAndReplacePattern = function(words, pattern) {
  const matches = [];

  for (const word of words) {
    if (word.length !== pattern.length) continue;

    let map = new Map();
    let set = new Set();
    let equals = true;

    for (let i = 0; i < pattern.length; i++) {
      if (map.has(pattern[i])) {
        if (map.get(pattern[i]) !== word[i]) {
          equals = false;
          break;
        }
      } else {
        if (set.has(word[i])) {
          equals = false;
          break;
        }

        map.set(pattern[i], word[i]);
        set.add(word[i]);
      }
    }

    if (equals) matches.push(word);
  }

  return matches;
}

console.log(findAndReplacePattern(['abc', 'def', 'ghi', 'gbb', 'lmk'], 'abc'));
console.log(findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc', 'ghi'], 'abb'));
console.log(findAndReplacePattern(['a', 'f', 'e', 't', 'h'], 'v'));
