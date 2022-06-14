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

var deleteDuplicates = function(head) {
    if(!head) {
        return null;
    }
    
    let current = head;
    
    while(current) {
        next = current.next;
        if(next && next.val === current.val) {
            current.next = next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
}

console.log(deleteDuplicates([1,1,2,3,3,4,4,5,5]));