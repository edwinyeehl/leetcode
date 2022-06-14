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

var preorderTraversal = function(root) {
    function traverseLayer(node) {
        if (!node) return [];
        
        return [node.val, ...traverseLayer(node.left), ...traverseLayer(node.right)];
    }

    return traverseLayer(root);
};