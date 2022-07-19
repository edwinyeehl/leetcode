/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const a = stones.pop();
        const b = stones.pop();
        
        if (a !== b) {
            stones.push(a - b);
        }
    }

    return stones.length ? stones[0] : 0;
}

console.log(lastStoneWeight([2,7,4,1,8,1])); // 1
console.log(lastStoneWeight([1])); // 1
