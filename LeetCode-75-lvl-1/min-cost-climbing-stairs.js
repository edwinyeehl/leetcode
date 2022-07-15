/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
    if (cost.length <= 2)
        return cost.length === 1 ? 0: Math.min(cost[0], cost[1]);

    let minCost = [cost[0], cost[1]];

    for (let i = 2; i < cost.length; i++) {
      const curMinCost = cost[i] + Math.min(minCost[0], minCost[1]);

      minCost = [minCost[1], curMinCost];
    }

    return Math.min(minCost[0], minCost[1]);
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 0, 0, 1]));