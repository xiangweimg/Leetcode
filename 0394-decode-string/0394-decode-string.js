/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {"3[2[a]b]"
    let stack = [];//[]
    let currStr = '';//aab
    let currNum = 0;//
    for(let char of s){
        if(char === "["){
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if (char === ']') {
            let prevNum = stack.pop();//3
            let prevStr = stack.pop();//""
            currStr = prevStr + currStr.repeat(prevNum);//aabaabaab
        } else if (!isNaN(char)) {
            currNum = currNum * 10 + Number(char);
        } else {
            currStr += char;
        }
    }
    return currStr;
};