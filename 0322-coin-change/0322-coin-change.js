/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {//[3,2]
    if(amount === 0) return 0;
    if(amount < 0) return -1;
    if(amount in memo) return memo[amount];
    let min = Infinity;
    for(let coin of coins){
        let res = 1 + coinChange(coins, amount - coin, memo) 
        if(res >0){
            min = Math.min(min, res)
        }
    }
    memo[amount] = min
    if(min === Infinity) return -1
    return min
};

