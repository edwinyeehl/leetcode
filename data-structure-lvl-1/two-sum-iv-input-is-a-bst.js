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
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var findTarget = function(root, k) {   
    const set = {};
    let found = false;

    const traverse = node => {
        if (!node) return;

        const needToFind = k - node.val;

        if (set[needToFind]) {
            found = true;
            return;
        } else {
            set[node.val] = true;
        }

        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);
    
    return found;
}

console.log(findTarget(new TreeNode(5, new TreeNode(4), new TreeNode(6, null, new TreeNode(7))), 9));