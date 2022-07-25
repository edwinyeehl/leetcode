/**
 * @param {string[]} words
 * @return {number}
 */

var longestPalindrome = function(words) {
    const map = {};
    let count = 0;

    for (const word of words) {
        if (!map[word]) {
            map[word] = 1;
        } else {
            map[word]++;
        }
    }

    let flag = false;

    for (const word of words) {
        const reverse = word.split('').reverse().join('');

        if (word === reverse) {
            while (map[word] >= 2) {
                map[word] -= 2;
                count += 4;
            }

            if (map[word] === 1 && !flag) {
                count += 2;
                flag = true;
                map[word]--;
            }

            continue;
        }

        while (map[word] > 0 && map[reverse] > 0) {
            map[word]--;
            map[reverse]--;
            count += 4;
        }
    }

    return count;
}

console.log(longestPalindrome(['lc', 'cl', 'gg', 'gg', 'cc', 'dd']));
console.log(longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab']));
