/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++){
	    let index = 0;  
		let word = ''
        while(strs[i][index] && prefix[index] && strs[i][index] === prefix[index]){
            // console.log(strs[i][index], prefix[index])
            word += strs[i][index]
            index++
        }
        if(!word.length) return word;
        prefix = word;
    }
    return prefix
};