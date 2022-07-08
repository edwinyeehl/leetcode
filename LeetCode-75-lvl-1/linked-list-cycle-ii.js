function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    debugger
    
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = head;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }

    return null;
};

console.log(detectCycle(new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))))));
console.log(detectCycle(new ListNode(1, new ListNode(2))));