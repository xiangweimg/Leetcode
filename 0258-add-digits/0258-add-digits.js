/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9
    // let sum = 0;
    // while(num > 9){
    //     let remainder = num % 10
    //     sum += remainder
    //     num = Math.floor(num/10)
    //     if(num < 10){
    //         num += sum
    //         sum = 0
    //     }
    // }
    // return num
};