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
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    function traverseStep(node) {
        if (!node) return [];
        
        return [...traverseStep(node.left), node.val, ...traverseStep(node.right)];
    }

    return traverseStep(root);
};