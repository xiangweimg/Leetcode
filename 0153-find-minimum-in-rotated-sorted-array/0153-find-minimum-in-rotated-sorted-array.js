/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0]
    for (let num of nums){
        if(num < min) return num
    }
    return min
};