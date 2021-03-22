// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// (4) solution: convert to array and use reduce
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("asdf");

// (3) solution adding letter to start of string
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// (1) my solution, starting at end of str
// function reverse(str) {
//   let result = [];
//   if (str.length === 1) {
//     return str;
//   }
//   // console.log(str);
//   for (let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i]);
//   }
//   return result.join("");
// }

// (2) solution using array.reverse prototype
// spit into array
// then reverse and join with empty string
// otherwise default is comma
// function reverse(str) {
//   // const arr = str.split("");
//   // return arr.reverse().join("");
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

module.exports = reverse;
