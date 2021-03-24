// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// (0) my solution
// take approach from steps problem
// function pyramid(n) {
//   let columns = n * 2 - 1;
//   let mid = Math.floor(columns / 2);
//   let startHash = mid;
//   let endHash = mid
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     // fill out current row
//     // divide to left and right of mid
//     for (let left = 0; left < startHash; left++) {
//       stair+=' '
//     }
//     for(let hash = startHash; hash <= endHash; hash++){
//       stair+='#'
//     }
//     for(let right = endHash+1; right < columns; right++){
//       stair+=' ';
//     }
//     startHash--;
//     endHash++;
//     console.log(stair);
//   }
// }

// (1) better implementation, use row for ranges
// function pyramid(n) {
//   const midpoint = Math.floor((2*n -1)/2)
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let col = 0; col < n * 2 - 1; col++) {
//       if(midpoint - row <= col && midpoint+row >= col){
//         level += '#'
//       }else{
//         level += ' '
//       }
//     }
//     console.log(level)
//   }
// }

// (2) recursive solution
function pyramid(n, row = 0, level = "") {
  const midpoint = Math.floor((2 * n - 1) / 2);
  // base case: row == n, printed all rows
  if (row === n) {
    return;
  }

  // print level when length == col
  // then go on to next level
  if (level.length === n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // level still needs work -- add space or pound
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level);
}
module.exports = pyramid;
