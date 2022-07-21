/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */

var makesquare = function(matchsticks) {
    const perimeter = matchsticks.reduce((a, b) => a + b, 0);
    if (perimeter % 4 !== 0 || matchsticks.length < 4) return false;

    const sideLength = perimeter / 4;
    let sides = new Array(4).fill(0);
    const mLen = matchsticks.length;

    matchsticks.sort((a, b) => b - a);

    const arrange = (i = 0) => {
        if (i === mLen) {
            return sides.every(side => side === sideLength);
        }
        
        for(let j = 0; j < 4; j++) {
            if (sides[j] + matchsticks[i] > sideLength) continue;

            sides[j] += matchsticks[i];

            if (arrange(i + 1)) return true;

            sides[j] -= matchsticks[i];
        }

        return false;    
    }

    return arrange();
}

console.log(makesquare([1,1,2,2,2])); // true
console.log(makesquare([3,3,3,3,4])); // false