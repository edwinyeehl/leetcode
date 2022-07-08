function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    const getLength = (node) => {
        let length = 0;

        while (node) {
            length++;
            node = node.next;
        }

        return length;
    }

    const len = getLength(head);

    let mid = Math.floor(len / 2);
    let node = head;

    while (mid--) {
        node = node.next;
    }

    return node;
};

console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))));