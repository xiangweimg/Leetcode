/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(list1, list2) {
    let curr1 = list1
    let curr2 = list2
    let res  = new ListNode(null)
    let tail = res 
    let remainder = 0;
    while(curr1 !== null && curr2 !==null){
        let sum = curr1.val + curr2.val + remainder
        if(sum> 9) {
            tail.next = new ListNode(sum % 10);
            remainder = 1
        }else{
            tail.next = new ListNode(sum)
            remainder = 0
        }
        tail = tail.next
        curr1 = curr1.next 
        curr2 = curr2.next
    }
    while(curr1){
        console.log(curr1, remainder)
        let sum = curr1.val + remainder
        if(sum> 9) {
            tail.next = new ListNode(sum % 10);
            remainder = 1
        }else{
            tail.next = new ListNode(sum)
            remainder = 0
        }
        tail = tail.next
        curr1 = curr1.next
    }
    while(curr2){
        let sum = curr2.val + remainder
        if(sum> 9) {
            tail.next = new ListNode(sum % 10);
            remainder = 1
        }else{
            tail.next = new ListNode(sum)
            remainder = 0
        }
        tail = tail.next
        curr2 = curr2.next
    }  
    if(remainder > 0){
        tail.next = new ListNode(remainder)
        remainder = 0;
    }
    return res.next
};