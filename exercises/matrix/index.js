// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// solution:
// have boundaries. for loop for each direction
// to right --> down --> to left ---> up ---> repeat

function matrix(n) {
  // construct empty n by n matrix array
  let result = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));
  // counter is the num to be inserted
  let counter = 1;
  // init boundaries
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // outer loop: go though each row/col
  while (startColumn <= endColumn && startRow <= endRow) {
    // loop to fill segment from start to end column, [startRow][currColumn]
    // the horizontal move
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // now the vertical down (increasing row)
    for (let r = startRow; r <= endRow; r++) {
      result[r][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // now to left [endRow][currCol]
    for (let currColumn = endColumn; currColumn >= startColumn; currColumn--) {
      result[endRow][currColumn] = counter;
      counter++;
    }
    endRow--;
    // up again [currRow][startColumn]
    for (let cr = endRow; cr >= startRow; cr--) {
      result[cr][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return result;
}

module.exports = matrix;
