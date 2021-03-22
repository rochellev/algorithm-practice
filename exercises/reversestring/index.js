// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

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

// use built in array reverse prototype
// spit into array
// then reverse and join with empty string
// otherwise default is comma
function reverse(str) {
  // const arr = str.split("");
  // return arr.reverse().join("");
  return str
    .split("")
    .reverse()
    .join("");
}

module.exports = reverse;
