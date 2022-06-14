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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const results = [];
    let carryOver = 0;
    
    while(l1 || l2 || carryOver) {
        
        let n1 = l1?.val || 0;
        let n2 = l2?.val || 0;
        
        let added = n1 + n2 + carryOver;
        carryOver = Math.floor(added / 10);
        added -= carryOver * 10;
        results.push(added);

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    
    let output;
    
    for(let i = results.length - 1; i >= 0; i--) {
        output = new ListNode(results[i], output);
    }
    
    return output;
};

console.log(addTwoNumbers(new ListNode([2,[4,3]]), new ListNode([5,[6,4]])));