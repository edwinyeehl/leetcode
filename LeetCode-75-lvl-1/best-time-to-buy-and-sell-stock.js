/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let lowest = Infinity;
    let highestProfit = 0;
    
    for (let value of prices) {
        if(value < lowest)
            lowest = value;
        
        if (highestProfit < value-lowest)
            highestProfit = value-lowest;
    }
    
    return highestProfit;
}