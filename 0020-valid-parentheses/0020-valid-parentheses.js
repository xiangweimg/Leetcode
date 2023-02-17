/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hash = {
        ')': '(',
        ']': '[',    
        '}': '{',
    }
    for(let char of s){
        if(char === '(' || char==='[' || char ==='{'){
            stack.push(char)
        }else if(char === ')' || char===']' || char ==='}'){
            if(stack.length && stack[stack.length -1] === hash[char]){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length === 0
};