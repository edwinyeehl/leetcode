/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

var getHint = function(secret, guess) {
    if (secret.length === 0 || guess.length === 0 || secret.length !== guess.length) {
        return "";
    }

    let bulls = 0;  // number of bulls
    let cows = 0;   // number of cows

    let secretMap = {};
    let guessMap = {};

    for (let i = 0; i < secret.length; i++) {
        const secretChar = secret[i];
        const guessChar = guess[i];

        if (secretChar === guessChar) {
            bulls++;
        } else {
            if (secretChar in secretMap) {
                secretMap[secretChar]++;
            } else {
                secretMap[secretChar] = 1;
            }

            if (guessChar in guessMap) {
                guessMap[guessChar]++;
            } else {
                guessMap[guessChar] = 1;
            }
        }
    }

    for (let key in secretMap) {
        if (key in guessMap) {
            cows += Math.min(secretMap[key], guessMap[key]);
        }
    }

    return `${bulls}A${cows}B`;
}

console.log(getHint("1807", "7810"));
console.log(getHint("1123", "0111"));