/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, color, oriColor = image[sr][sc]) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== oriColor || image[sr][sc] === color) {
      // handle cases where coordinate is out of bounds or already filled with color
      return image;
  }

  image[sr][sc] = color;

  floodFill(image, sr + 1, sc, color, oriColor);
  floodFill(image, sr - 1, sc, color, oriColor);
  floodFill(image, sr, sc + 1, color, oriColor);
  floodFill(image, sr, sc - 1, color, oriColor);

  return image;
}

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));