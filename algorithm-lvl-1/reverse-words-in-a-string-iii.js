/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
    var result = '';

    for (var i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }

    return result;
}

var reverseWords = function(s) {
    var arr = s.split(' ');
    var result = '';

    for (var i = 0; i < arr.length; i++) {
        result += reverseString(arr[i]) + ' ';
    }

    return result.trim();
}

console.log(reverseWords('the sky is blue'))