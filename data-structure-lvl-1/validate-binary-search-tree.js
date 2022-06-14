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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
    if (!root) return true;

    const dfs = (root, min, max) => {
        let leftRes = true;
        let rightRes = true;

        if(root.left) {
            leftRes = root.left.val < root.val && root.left.val > min && dfs(root.left, min, root.val);
        }

        if(root.right) {
            rightRes = root.right.val > root.val && root.right.val < max && dfs(root.right, root.val, max);
        }
        
        return leftRes && rightRes;
    }

    return dfs(root, -Infinity, Infinity);
};