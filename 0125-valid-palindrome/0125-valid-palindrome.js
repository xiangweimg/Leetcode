/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let res = ''
    for(let i = 0; i < s.length; i++){
        if(letters.includes(s[i])){
            res += s[i].toLowerCase()
        }
    }
    let left = 0;
    let right = res.length -1;
    while(right > left){
        if(res[left] !== res[right]) return false
        left++
        right--
    }
    return true
};