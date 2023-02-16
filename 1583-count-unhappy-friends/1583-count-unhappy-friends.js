/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    //[[], [3,2], [], [1]]
    let preferred = []
    let count = 0
    for(let[a,b] of pairs){
        preferred[a] = preferences[a].slice(0, preferences[a].indexOf(b))
        preferred[b] = preferences[b].slice(0, preferences[b].indexOf(a))
    }
    for(let i=0; i< preferred.length; i++){
        if(preferred[i].length){
            for(let person of preferred[i]){
                if(preferred[person].includes(i)){
                    count++
                    break
                }
            }
        }
    }
    return count
};