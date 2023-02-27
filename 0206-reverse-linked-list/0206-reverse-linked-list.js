/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head
    let dummyTail = null
    while(curr !== null){
        let nextNode = curr.next
        curr.next = dummyTail;
        dummyTail = curr
        curr = nextNode
    }
    return dummyTail
};
