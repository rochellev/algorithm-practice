// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// (1) My solution - had a hard time
function reverseInt(n) {
  let rev = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(rev) * Math.sign(n);
}

module.exports = reverseInt;
