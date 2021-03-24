// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// (0) convert to array to use filter then take that length
// function vowels(str) {
//   return str
//     .toLowerCase()
//     .split("")
//     .filter(curr => {
// if (
//   curr == "a" ||
//   curr == "e" ||
//   curr == "i" ||
//   curr == "o" ||
//   curr == "u"
// ) {
//         return curr;
//       }
//     }).length;
// }

// (1) iterative solution
// make use of includes helper method
// function vowels(str) {
//   let count = 0;
//   const vowelString = ["a", "e", "i", "o", "u"];
//   for (let curr of str.toLowerCase()) {
//     if (vowelString.includes(curr)) {
//       count++;
//     }
//   }
//   return count;
// }

// (2) RegEx solution
// [] - if contains anything in square brackets, let us know
// g  - look at whole string, don't stop at beginning
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  // null falsey -- returned if no matches
  return matches ? matches.length : 0;
}
module.exports = vowels;
