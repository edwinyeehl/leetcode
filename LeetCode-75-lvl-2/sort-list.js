/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = (head) => {
    if (!head || !head.next) return head;

    const split = (node) => {
        let slow = node;
        let fast = node;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const right = slow.next;
        slow.next = null;

        return [node, right];
    }

    const merge = (left, right) => {
        let dummy = new ListNode(0);
        let cur = dummy;

        while (left || right) {
            if (left === null) {
                cur.next = right;
                right = right.next;
            } else if (right === null) {
                cur.next = left;
                left = left.next;
            } else {
                if (left.val < right.val) {
                    cur.next = left;
                    left = left.next;
                } else {
                    cur.next = right;
                    right = right.next;
                }
            }

            cur = cur.next;
        }

        return dummy.next;
    }

    const [left, right] = split(head);
    const sortedLeft = sortList(left);
    const sortedRight = sortList(right);

    return merge(sortedLeft, sortedRight);
}

console.log(sortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(5, new ListNode(3)))))));
console.log(sortList(new ListNode(-1, new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(0)))))));