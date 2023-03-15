/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sorted = strs.map(el => el.split('').sort().join(''));
    let res = {}
    for(let i = 0; i < strs.length; i++){
        if(res[sorted[i]]){
            res[sorted[i]].push(strs[i])
        }else{
            res[sorted[i]] =[]
            res[sorted[i]].push(strs[i])
        }
    }
    return Object.values(res)
};