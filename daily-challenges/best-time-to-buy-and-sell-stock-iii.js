/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let sell1 = 0;
    let sell2 = 0;
    let buy1 = -Infinity;
    let buy2 = -Infinity;

    for (const price of prices) {
        buy1 = Math.max(buy1, -price);
        sell1 = Math.max(sell1, buy1 + price);
        buy2 = Math.max(buy2, sell1 - price);
        sell2 = Math.max(sell2, buy2 + price);
        console.log(`price: ${price}, buy1: ${buy1}, sell1: ${sell1}, buy2: ${buy2}, sell2: ${sell2}`);
    }

    return sell2;
}

console.log(maxProfit([7,1,5,3,6,4])); // 7
console.log(maxProfit([3,3,5,0,0,3,1,4])); // 6
console.log(maxProfit([1,2,3,4,5])); // 4
console.log(maxProfit([7,6,4,3,1])); // 0