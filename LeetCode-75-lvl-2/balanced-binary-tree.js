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
 * @return {boolean}
 */

var isBalanced = function(root) {
    const dfs = (node) => {
        if (!node) return 0;
        const left = 1 + dfs(node.left);
        const right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }

    return dfs(root) !== Infinity;
}

console.log(isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))); // true
console.log(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2)))) // false
console.log(isBalanced(new TreeNode())); // true