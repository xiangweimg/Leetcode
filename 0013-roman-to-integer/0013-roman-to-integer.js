/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0
    for(let i = 0; i< s.length; i++){
        let curr = s[i]
        let after = s[i + 1]
        if( number[curr] < number[after]){
            res += (number[after] - number[curr])
            i = i + 1
        }else{
            res += number[curr]
        }
    }
    return res
};