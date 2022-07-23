/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let node = head;
    let vnode = head;
    let flag = true;

    const backtrack = (node) => {
        node.next && backtrack(node.next);
        if (node.val !== vnode.val) {
            flag = false;
        }
        vnode = vnode.next;
    }

    backtrack(node);
    return flag;
}