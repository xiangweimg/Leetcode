/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k, memo={}) {
    let arr = []// 12, 13, 14
    for(i = lo; i <= hi; i++){
        arr.push(i);
    }
    
    const findPower = (num) =>{
    let count = 0
        while(num > 1){
            
            if(num % 2 === 0){
                num = num / 2
            }else{
                num = num * 3 + 1
            }
            count++
        }
    return count
    }
    arr = arr.sort((a,b) => findPower(a) - findPower(b))
    return arr[k - 1]
    
    
};

