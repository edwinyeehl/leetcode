/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
    const left = Math.min(p.val, q.val);
    const right = Math.max(p.val, q.val);
    const val = root.val;

    if (val >= left && val <= right) {
        return root;
    }

    if (val < left && val < right) {
        return lowestCommonAncestor(root.right, p, q);
    }

    if (val > left && val > right) {
        return lowestCommonAncestor(root.left, p, q);
    }
}
