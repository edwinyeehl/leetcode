/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function(word1, word2) {
    let word1Arr = word1.split('');
    let word2Arr = word2.split('');
    let DP = new Array(word1Arr.length + 1);

    for (let i = 0; i < word1Arr.length + 1; i++) {
        DP[i] = new Array(word2Arr.length+1).fill(0);
    }

    for(let i = 0; i <= word1Arr.length; i++){
        for(let j = 0; j <= word2Arr.length; j++){
            if(i == 0){
                DP[i][j] = j;
            }else if(j == 0){
                DP[i][j] = i;
            }else if(word1Arr[i-1] == word2Arr[j-1]){
                DP[i][j] = DP[i-1][j-1];
            }else{
                DP[i][j] = 1 + Math.min(DP[i-1][j], DP[i][j-1]);
            }
        }   
    }
    return DP[word1Arr.length][word2Arr.length];
}

console.log(minDistance('a', 'b'));
console.log(minDistance('sea', 'eat'));