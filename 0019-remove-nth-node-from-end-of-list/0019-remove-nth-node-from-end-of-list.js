/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let curr = head;
    while(curr){
        length++
        curr = curr.next
    }
    let remainder = length - n;
    curr=head
    if(length === n) return head.next
    while(curr){
        remainder--
        if(remainder === 0){
            let nextNode = curr.next.next
            curr.next = nextNode
        }else{
            curr = curr.next
        }
    }
    return head
};