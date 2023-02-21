/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left = nums.slice(0,n)
    let right = nums.slice(n)

    let result = []
    for(let i =0; i< n; i++){
        result.push(left[i])
        result.push(right[i])
    }
    return result
};