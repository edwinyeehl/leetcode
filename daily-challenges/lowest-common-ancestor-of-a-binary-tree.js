/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (!left) return right;
    if (!right) return left;
    return root;
}

/**
 * Can't test here and I don't know why but it works on leetcode
 * 
 * const tree = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8)));
 * 
 * console.log(lowestCommonAncestor(tree, 5, 1))
 * console.log(lowestCommonAncestor(tree, 5, 4))
 * console.log(lowestCommonAncestor(tree, 7, 6))
 */