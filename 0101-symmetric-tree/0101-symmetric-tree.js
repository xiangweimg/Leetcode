/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) {
    return isMirror(root.left, root.right)
}; 

const isMirror = (leftN, rightN) =>{
    if(!leftN && !rightN) return true
    if(!leftN || !rightN) return false
    if(leftN.val !== rightN.val) return false
    return (isMirror(leftN.right, rightN.left) && isMirror(leftN.left, rightN.right))
}

