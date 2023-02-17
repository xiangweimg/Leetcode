/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let copy = [...arr]
    let sorted = copy.sort((a,b) => a-b)
    let ranking = {}
    let res = []
    let count = 1
    for(let i = 0; i< sorted.length; i++){
        let curr = sorted[i]
        if(!ranking[curr]){
            ranking[curr] = count
            count++
        }
    }    
    for(let i = 0; i< arr.length; i++){
        let curr = arr[i]
        if(ranking[curr]){
            res.push(ranking[curr])
        }
    } 
    return res
};