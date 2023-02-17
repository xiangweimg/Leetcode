/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(items) {
    if(items.length === 0) return [[]];
    const first = items[0];//B
    const perms = permute(items.slice(1));// 
    const fullPermutation = [];
    for(let perm of perms) {//[[2,3], [3,2]]
        for(let i = 0; i <= perm.length; i++){
        fullPermutation.push([...perm.slice(0,i), first, ...perm.slice(i)])
        }
    }
  return fullPermutation
};