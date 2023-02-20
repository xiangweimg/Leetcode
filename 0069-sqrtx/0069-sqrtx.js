/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    while(left <= right){
        console.log(left, right)
        let mid = Math.floor((left + right) / 2) //4
        if(mid * mid === x){
            return mid
        }else if(mid * mid < x){// 2 * 2
            left = mid + 1
        }else if(mid * mid > x){
           right = mid - 1
        }
    }
    return left -1
};