/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res = 0
    for(let row= 0; row < mat.length; row++){
        for(let col = 0; col < mat[0].length;col++){
            if(mat[row][col] === 1) {
                if(isValidRow(row) && isValidCol(col)){
                    res++
                }
            }
        }
    } 
    return res
    function isValidRow(index) {
            let count = 0
            let row = mat[index]
            for (let i = 0; i < row.length; i++) {
            if (row[i] === 1) {
                    count++
                }
            }
            if (count > 1) {
                return false
            } else {
                return true
            }
    }
    function isValidCol(index) {//1
            let count = 0
            for (let i = 0; i < mat.length; i++) {
            if (mat[i][index] === 1) {
                    count++
                }
            }
            if (count > 1) {
                return false
            } else {
                return true
            }
    }
};