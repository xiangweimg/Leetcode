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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const firstRoot = root;
    const secondRoot = root;

    const find =(node, parent, target, level) =>{
        level= level + 1
        if(!node) return null
        if(node.val === target){
            return {parent: parent.val, level}
        }
        return find(node.left, node, target, level) ||find(node.right, node, target, level)
    }

    const a = find(firstRoot, firstRoot, x, 0);
    const b = find(secondRoot, secondRoot, y, 0);
    return a.parent !== b.parent && a.level === b.level

};