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
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function(root, targetSum) {
    let res = 0;

    const calPathSum = (node, sum) => {
        if (!node) return;

        sum -= node.val;

        if (sum === 0) res++;

        calPathSum(node.left, sum);
        calPathSum(node.right, sum);
    }

    const main = (node, sum) => {
        if (!node) return;

        calPathSum(node, sum);
        main(node.left, sum);
        main(node.right, sum);
    }

    main(root, targetSum);
    return res;
}

const treenode = new TreeNode(10, new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), new TreeNode(2, null, new TreeNode(1))), new TreeNode(-3, null, new TreeNode(11)));
console.log(pathSum(treenode, 8));