/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let n = (minutesToTest / minutesToDie) >> 0;
  n += 1;
  const result = Math.ceil(Math.log(buckets) / Math.log(n));

  return result;
};

console.log(poorPigs(1000, 15, 60)); // 5
console.log(poorPigs(4, 15, 15)); // 2
console.log(poorPigs(4, 15, 30)); // 2
