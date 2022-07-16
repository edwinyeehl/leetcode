/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
    let maxLen = 0;
    let slow = 0;
    let fast = 0;
    const visited = {};

    while (fast < s.length) {
        const char = s[fast];
        visited[char] = visited[char] ? visited[char] + 1 : 1;

        maxLen = Math.max(visited[char], maxLen);

        if (fast - slow + 1 - maxLen > k) {
            visited[s[slow]]--;
            slow++;
        }

        fast++;
    }

    return fast - slow;
}

console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2));