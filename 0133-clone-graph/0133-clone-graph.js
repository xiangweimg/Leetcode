/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, copy = new Map()) {
    // if (!node) return null;
    // if (!copy.has(node.val)) {
    //     copy.set(node.val, new Node(node.val));
    //     console.log(node) 
    //     copy.get(node.val).neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor, copy))
    // }
    // console.log(copy) 
    
    // return copy.get(node.val);
    if(!node) return null;
    if(!copy.get(node.val)){
        copy.set(node.val, new Node(node.val));
        copy.get(node.val).neighbors = node.neighbors.map((neighbor)=> cloneGraph(neighbor, copy))
    }

    return copy.get(node.val)
};