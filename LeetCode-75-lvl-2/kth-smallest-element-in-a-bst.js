/**
 * Definition for a binary tree node.
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    let val = null;

    (function count (node, offset = 0) {
        if (!node) return 0;

        const left = count(node.left, offset);
        
        if (offset + left + 1 === k) {
            val = node.val;
            return;
        }

        const right = count(node.right, offset + left + 1);

        return left + right + 1;
    })(root); // IFFE, learned new stuffs

    return val;
}

const treeNode = new TreeNode(2, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6));
console.log(kthSmallest(treeNode, 3)); // 3