// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// (0) my solution
function fizzBuzz(n) {
  const fizz = "fizz";
  const buzz = "buzz";
  for (let i = 1; i <= n; i++) {
    let isFizz = i % 3 === 0 ? true : false;
    let isBuzz = i % 5 === 0 ? true : false;
    if (isFizz && isBuzz) {
      console.log(fizz + buzz);
    } else if (isFizz) {
      console.log(fizz);
    } else if (isBuzz) {
      console.log(buzz);
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
