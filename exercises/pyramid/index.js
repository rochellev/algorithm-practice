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
function pyramid(n) {
  let columns = n * 2 - 1;
  let mid = Math.floor(columns / 2);
  let startHash = mid;
  let endHash = mid
  for (let row = 0; row < n; row++) {
    let stair = "";
    // fill out current row
    // divide to left and right of mid
    for (let left = 0; left < startHash; left++) {
      stair+=' '
    }
    for(let hash = startHash; hash <= endHash; hash++){
      stair+='#'
    }
    for(let right = endHash+1; right < columns; right++){
      stair+=' ';
    }
    startHash--;
    endHash++;
    console.log(stair); 
  }
}

module.exports = pyramid;
