/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

const { MaxPriorityQueue } = require("datastructures-js");

var kthSmallest = function (matrix, k) {
  const q = new MaxPriorityQueue();

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix.length; j++) {
      q.enqueue(matrix[i][j]);
      if (q.size() > k) q.dequeue();
    }

  return q.front().element;
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);
