/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var hasPathSum = function(root, targetSum) {
    if (root) {
        // Check if the current node is the leaf node and the sum is equal to the target sum
        if (!root.left && !root.right) {
            return root.val == targetSum;
        }

        // Continue checking if the current node has any child and if the sum is equal to the target sum
        return (
            // target sum - sum is to 
            (root.left ? hasPathSum(root.left, targetSum - root.val) : false) ||
            (root.right ? hasPathSum(root.right, targetSum - root.val) : false)
        )

    }
    return false;
}


console.log(hasPathSum(new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1)))), 22));