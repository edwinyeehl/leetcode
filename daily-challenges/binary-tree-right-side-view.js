/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
    let result = [];

    if (!root) {
        return result;
    }
    
    function pre(node, depth) {
        if (!node) {
            return;
        }

        result[depth] = node.val;
        pre(node.left, depth + 1);  // in case the node has no right child
        pre(node.right, depth + 1); // let right overwrite left
    }

    pre(root, 0);
    return result
}

console.log(rightSideView(new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)))));
console.log(rightSideView(new TreeNode(1, null, new TreeNode(3))));
console.log(rightSideView(new TreeNode()));