/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = Infinity;
    let maxProfit = 0;
    for(let price of prices){
        if(price < buyPrice){
            buyPrice = price
        }else{
            let profit = price - buyPrice;
            maxProfit = Math.max(profit, maxProfit)
        }
    }
    return maxProfit
};