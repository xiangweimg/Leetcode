/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length === 1) return nums[0]
    // min === undefined ? min = nums[0]: min = min
    let midpoint = Math.floor(nums.length / 2)
    let left = nums.slice(0, midpoint);
    let right = nums.slice(midpoint)
    let leftEnd = left[left.length -1]
    let rightEnd = right[right.length -1];
    if(left[0] < rightEnd) return left[0];
    
    if(leftEnd > right[0]){
        return right[0]
    }else if(right[0] < rightEnd){
        return findMin(left)
    }else{
        return findMin(right)
    }
    
};