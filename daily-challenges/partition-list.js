/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    const dummyLess = new ListNode(0);
    const dummyMore = new ListNode(0);

    let less = dummyLess;
    let more = dummyMore;
    let node = head;
    debugger
    while (node) {
      if (node.val < x) {
        less = less.next = node;
      } else {
        more = more.next = node;
      }
      node = node.next;
    }

    less.next = dummyMore.next;
    more.next = null;

    return dummyLess.next;
};

console.log(partition(new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))))), 3));