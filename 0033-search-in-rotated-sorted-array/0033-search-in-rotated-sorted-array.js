/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    let midpoint = Math.floor(nums.length /2);
    let left = nums.slice(0, midpoint);
    let right = nums.slice(midpoint);
    let rightEnd = right[right.length - 1]
    let leftEnd = left[left.length -1]
    
    if(nums[midpoint] === target) return midpoint;

    if(nums[midpoint] > rightEnd){
       if(target < left[0] || target > leftEnd){
           let answer = search(right,target)
           if(answer === -1){
                return -1
           }else{
                return answer + midpoint
           }
       }else{
           return search(left,target)
       }
    }else{
        if(target > rightEnd || target < right[0] ){
            return search(left, target)
        }else{
           let answer = search(right,target)
           if(answer === -1){
                return -1
           }else{
                return answer + midpoint
           }
        }
    }
};