/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

var wordSubsets = function (words1, words2) {
  let frequencyB = new Array(26).fill(0);

  const findSubset = (wordArr) => {
    for (let i = 0; i < wordArr.length; i++) {
      if (frequencyB[i] > wordArr[i]) {
        return false;
      }
    }

    return true;
  };

  const findFrequency = (word) => {
    let frequency = new Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
      frequency[word.charCodeAt(i) - 97]++;
    }

    return frequency;
  };

  for (const word of words2) {
    let frequency = findFrequency(word);

    for (let i = 0; i < frequency.length; i++) {
      frequencyB[i] = Math.max(frequencyB[i], frequency[i]);
    }
  }

  let result = [];

  for (const word of words1) {
    const isSubset = findSubset(findFrequency(word));

    if (isSubset) result.push(word);
  }

  return result;
};

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
);
console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"])
);
