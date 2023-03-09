/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    	const dp = Array(nums.length).fill(1);
		let max = 1;
		for(let i = 0; i < nums.length; i++){
			for(let j = i +1; j < nums.length; j++){
                if(nums[j]> nums[i]){
                    dp[j] = Math.max(dp[j],dp[i] + 1)
                    max = Math.max(dp[j], max);
                }
			}
		}
		return max
};