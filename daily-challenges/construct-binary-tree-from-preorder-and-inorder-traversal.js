/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
    let preo = 0;
    let ino = 0;

    const build = (node) => {
        if (inorder[ino] !== node) {
            const root = new TreeNode(preorder[preo++]);
            root.left = build(root.val);
            ino++;
            root.right = build(node);
            return root;
        }
        return null;
    }

    return build();
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));