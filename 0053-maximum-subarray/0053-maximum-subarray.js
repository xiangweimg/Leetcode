/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let max = -Infinity;
    for(let num of nums){
        sum = sum + num;
        max = Math.max(sum, max)
        if(sum < 0) sum = 0; 
    }
    return max
};