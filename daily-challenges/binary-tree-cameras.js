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
 * @return {number}
 */

/**
 * A node can be in 3 states:
 * 0: not covered
 * 1: covered by camera
 * 2: covered by camera of neighbour
 * 
 * travel from top to bottom
 * skip adding camera to all leaf nodes to minimalise camera use
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minCameraCover = function(root) {
    let result = 0;

    // recurse through the tree
    const dfs = (node) => {
        if (!node) {
            return 2;
            // if return 0, camera will be added
            // if return 1, camera will be added to neighbour
            // return 2, camera will not be added
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        // both children are monitored
        if (left == 2 && right == 2)
            return 0;

        // one of child not monitored
        if (left == 0 || right == 0) {
            result++;
            return 1;
        }

        // one of child has camera
        if (left == 1 || right == 1) {     
            return 2;
        }

        return;
    }

    if(dfs(root) == 0) {
        result++;
    }

    return result;
}

console.log(minCameraCover(new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)), null)));
console.log(minCameraCover(new TreeNode(0, new TreeNode(0, new TreeNode(0, new TreeNode(0, null, new TreeNode(0)), null), null), null)));