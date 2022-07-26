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
 * @return {TreeNode}
 */

var TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
  if (root) {
      [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
}

// test function
const result = invertTree(new TreeNode(2, new TreeNode(1), new TreeNode(3)));
console.log(result);