class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.len = nums.length;
    this.segTree = new Array(this.len * 2);
    this.build(nums);
  }

  /**
   * @param {*} nums
   * @return {void}
   */
  build(nums) {
    let len = this.len;
    let j = 0;

    for (let i = len; i < len * 2; i++) {
      this.segTree[i] = nums[j++];
    }

    for (let i = len - 1; i > 0; i--) {
      this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
    }
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  update(index, val) {
    let len = this.len;
    let j = index + len;
    this.segTree[j] = val;

    while (j > 0) {
      let left = j % 2 === 1 ? j - 1 : j;
      let right = j % 2 === 0 ? j + 1 : j;
      j = Math.floor(j / 2);
      this.segTree[j] = this.segTree[left] + this.segTree[right];
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    let len = this.len;
    left += len;
    right += len;
    let sum = 0;

    while (left <= right) {
      if (left % 2 === 1) {
        sum += this.segTree[left];
        left++;
      }

      if (right % 2 === 0) {
        sum += this.segTree[right];
        right--;
      }

      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    return sum;
  }
}

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // return 1 + 3 + 5 = 9
numArray.update(1, 2); // nums = [1, 2, 5]
console.log(numArray.sumRange(0, 2)); // return 1 + 2 + 5 = 8
