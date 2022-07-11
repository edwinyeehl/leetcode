// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */

var preorder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    result.push(root.val);

    for (let child of root.children) {
        result = result.concat(preorder(child));
    }

    return result;
}

console.log(preorder(new Node(1, [new Node(2, [new Node(4), new Node(5)]), new Node(3, [new Node(6), new Node(7)])])));