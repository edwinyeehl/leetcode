/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    
    while (n--) {
        slow = slow.next;
    }

    while (slow && slow.next) {
        fast = fast.next;
        slow = slow.next;
    }

    if (!slow) {
        head = head.next;
    } else {
        fast.next = fast.next ? fast.next.next : null;
    }


    return head;
}

console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2));