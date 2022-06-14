/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    var map = {};
    for (var i = 0; i < magazine.length; i++) {
        if (map[magazine[i]]) {
            map[magazine[i]]++;
        } else {
            map[magazine[i]] = 1;
        }
    }
    for (var i = 0; i < ransomNote.length; i++) {
        if (map[ransomNote[i]]) {
            map[ransomNote[i]]--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));