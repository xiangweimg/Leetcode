/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let num = 1
    while(num * num < x){
        num += 1
    }
    return num * num === x ? num : num -1
};