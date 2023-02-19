/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let first = new Set(nums[0])
    for(let i = 0; i< nums.length; i++){
        first = new Set(nums[i].filter(x => first.has(x)))
    }

    return Array.from(first).sort((a,b)=> a-b)
};