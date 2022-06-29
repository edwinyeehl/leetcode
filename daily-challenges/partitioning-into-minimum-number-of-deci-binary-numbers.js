/**
 * @param {string} n
 * @return {number}
 */

var minPartitions = function(n) {
    return Math.max(...n);
}

console.log(minPartitions('32'));
console.log(minPartitions('82734'));
console.log(minPartitions('27346209830709182346'));