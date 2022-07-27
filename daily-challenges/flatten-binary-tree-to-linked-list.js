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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    if (root === null) return root;
    
    if (root.left) {
        let last = root.left;

        while (last.right) {
            last = last.right;
        }

        const tmp = root.right;
        root.right = root.left;
        last.right = tmp;
        root.left = null;
    }

    flatten(root.right);
}

const treenode = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, new TreeNode(6), new TreeNode(7)));
flatten(treenode);
console.log(treenode);