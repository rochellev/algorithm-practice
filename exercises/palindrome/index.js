// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// (1) my solution
function palindrome(str) {
  let reversed = str
    .split("")
    .reverse()
    .join("");

  return reversed === str ? true : false;
}


// (2)
// function palindrome(str) {

// }

module.exports = palindrome;
