// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// (0) my solution
// using string repeat method
// function steps(n) {
//   const hash = "#";
//   const space = " ";
//   let s = 1;
//   while (s <= n) {
//     console.log(hash.repeat(s) + space.repeat(n - s));
//     s++;
//   }
// }

// (1) two for loops
// seeing matrix, show # when row <= col
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (row >= column) {
//         stair+= '#'
//       } else {
//         stair+= ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// (2) Recursion
// add in default to extra input row
// this is how you can save extra arguments.
// just be sure to have default
function steps(n, row = 0, stair = "") {
  // base case-- row === n
  // finished printing steps
  if (row === n) {
    return;
  }
  // if the string stair.length === n
  // at end of row (done with stair)
  if (n === stair.length) {
    console.log(stair);
    // could have separate line since not using returned val
    return steps(n, row + 1);
  }
  // if stair.length <= n. still add #
  // else add space
  // if (stair.length <= row) {
  //   stair += "#";
  // } else {
  //   stair += " ";
  // }

  const add = stair.length <= row ? "#" : " ";

  // call again to finish current row
  steps(n, row, stair + add);
}
module.exports = steps;
