/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head, nextList=null) {
    let dummyHead = head
    let curr = dummyHead
    while(curr !== null){
        if(curr.child){
            let oldNext = curr.next
            curr.next = curr.child
            curr.child = null
            curr.next.prev = curr
            flatten(curr.next, oldNext)
        }else if(curr.next === null && nextList){
            curr.next = nextList
            nextList.prev = curr
            return
        }
        curr = curr.next
    }
    return dummyHead
};