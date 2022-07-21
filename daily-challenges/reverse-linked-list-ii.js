/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function(head, left, right) {
    if (left >= right) {
        return head;
    }
    
    let start = head;
    let curr = head;

    let i = 1;

    while (i < left) {
        start = curr;
        curr = curr.next;
        i++;
    }

    let prev = null;
    let tail = curr;

    while (i <= right) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;
    }

    start.next = prev;
    tail.next = curr;

    return left == 1 ? prev : head;
}

const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseBetween(node, 2, 4)); // [1, 4, 3, 2, 5]