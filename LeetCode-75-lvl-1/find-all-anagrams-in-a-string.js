/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    let result = [];
    let pMap = {};
    
    for (let char of p) {
        if (char in pMap) {
            pMap[char]++;
        } else {
            pMap[char] = 1;
        }
    }
    
    let left = 0;
    let right = 0;
    let pLen = p.length;

    while (right < s.length) {
        if (pMap[s[right]] > 0) {
            pLen--;
        }

        pMap[s[right]]--;
        right++;

        if (pLen === 0) {
            result.push(left);
        }

        if (right - left === p.length) {
            if (pMap[s[left]] >= 0) {
                pLen++;
            }
            
            pMap[s[left]]++;
            left++;
        }
    }

    return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));