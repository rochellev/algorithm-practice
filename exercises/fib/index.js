// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3---> fib(3) + fib(2)

// so fib(n) = fib(n-1) + fib(n-2)

// (0) my attempt at recursive
// exponential time - dramatic increase in the number of function calls
// make better? Memoization

// function fib(n) {
//   // base case: n < 2
//   // known fib(1)
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// recursion with memoization

// memoize function intermetiate
// returns a function
//
// function memoize(fn) {
//   const cache = {};
//   // anonymous function gets the arguments intended for slowFib
//   // don't really know so use ...args --> assign to array
//   return function(...args) {
//     //  already called? just return cache
//     if (cache[args]) {
//       return cache[args];
//     }
//     // never called with those arguments
//     // call slowFib
//     // apply helper --- when calling function with array
//     const result = fn.apply(this, args);
//     // store result of calling slowFib
//     cache[args] = result;
//     // then return
//     return result;
//   };
// }
// function fib(n) {
//   // base case: n < 2
//   // known fib(1)
//   if (n < 2) {
//     return n;
//   }
//   // reference to memoize function
//   return fib(n - 1) + fib(n - 2);
// }

// fib = memoize(fib);

function memoize(fn) {
  const cache = {};
  // anonymous function gets the arguments intended for slowFib
  // don't really know so use ...args --> assign to array
  return function(...args) {  
    if (cache[args]) {
      return cache[args];
    }
    // not seen arguments before, call slowFib 
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}
function fib(n) {
  if (n < 2) {
    return n;
  }
  // reference to memoize function
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// (1) trying iterative  -> linear runtime
// know fib(0) = 0, fib(1)=1
// function fib(n) {
//   // for n equal 0 or 1
//   if (n < 2) {
//     return n;
//   }
//   // so n >= 2
//   let num1 = 0;
//   let num2 = 1;
//   let curr = 2;
//   let result = 0;
//   while (curr <= n) {
//     result = num1 + num2;
//     num1 = num2;
//     num2 = result;
//     curr++;
//   }
//   return result;
// }

// (2) using for loop and array
// my solution uses less memory, no array
// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

module.exports = fib;
