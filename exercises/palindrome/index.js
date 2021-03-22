// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// (2) no manual reverse, make use of arr every() prototype
// do boolean check on every element in array
// not ideal, extra comparisons
function palindrome(str) {
 return str.split('').every((char, currIndex) =>{
    return char === str[str.length - currIndex - 1]
  })
}

// (1) my solution --- what stephen came up with! yay
// function palindrome(str) {
//   let reversed = str
//     .split("")
//     .reverse()
//     .join("");

//   return reversed === str ? true : false;
// }



module.exports = palindrome;
