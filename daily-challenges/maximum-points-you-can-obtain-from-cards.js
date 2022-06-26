/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

var maxScore = function(cardPoints, k) {
    let sum = 0;
    let length = cardPoints.length;
    
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }

    let max = sum;

    for (let i = k - 1, j = length - 1; i >= 0; i--, j--) {
        sum += cardPoints[j] - cardPoints[i];
        max = Math.max(max, sum);
    }

    return max;
}

console.log(maxScore([1,2,3,4,5,6,1], 4));