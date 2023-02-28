/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {//3
  if (n === 1 || n === 2) return n
  if (n in memo) return memo[n]
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);// 2 1
  return memo[n]
};