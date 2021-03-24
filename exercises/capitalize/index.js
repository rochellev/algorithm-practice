// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// (0) my thing
// split words, then for each word capitalize first char
//  then join with rest of word and join back to string
function capitalize(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// function capitalize(str) {
//   // regex: \b --> beginning word /#(\s|^)([a-z0-9-_]+)#i/g
//   let reg = /(\b[A-Za-z](?!\b))/g
//   let result = str.replace(reg, (x) => x.charAt(0).toUpperCase() + x.slice(1))
//   return result.charAt(0).toUpperCase() + result()
// }

module.exports = capitalize;
