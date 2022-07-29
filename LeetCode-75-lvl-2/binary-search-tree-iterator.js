/**
 * Definition for a binary tree node.
 */

class TreeNode {
  constructor(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

class BSTIterator {
  /**
   * @param {TreeNode} root
   */
  constructor(root) {
    this.stack = [];
    this.root = root;
  }

  /**
   * @return {number}
   */
  next() {
    while (this.root) {
      this.stack.push(this.root);
      this.root = this.root.left;
    }

    const res = this.stack.pop();
    this.root = res.right;

    return res.val;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return (this.root ? true : (this.stack.length > 0 ? true : false)); 
  }
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const treeNode = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
const bstIterator = new BSTIterator(treeNode);
console.log(bstIterator.next()); // 3
console.log(bstIterator.next()); // 7
console.log(bstIterator.hasNext()); // true
console.log(bstIterator.next()); // 9
console.log(bstIterator.hasNext()); // true
console.log(bstIterator.next()); // 15
console.log(bstIterator.hasNext()); // true
console.log(bstIterator.next()); // 20
console.log(bstIterator.hasNext()); // false