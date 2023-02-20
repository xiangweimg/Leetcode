/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(["a","e","i","o","u","A",'E','I','O','U'])
    let arr = s.split("")
    let left = 0;// e
    let right = arr.length -1
    while(left < right){
        if(vowels.has(arr[left]) && vowels.has(arr[right])){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }else if(!vowels.has(arr[left])){
            left++
        }else if(!vowels.has(arr[right])){
            right--
        }
    }
    return arr.join("")
};