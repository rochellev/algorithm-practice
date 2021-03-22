// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// convert to obj
// keys: the character, value: the count

// (1) my solution: make obj with keys as chars and their counts as val
// while generating object, do checks for current max then return that max char
function maxChar(str) {
  let maxCount = 0;
  let maxChar = "";
  let chars = {};
  str.split("").forEach(element => {
    chars[element] = chars[element] + 1 || 1;
    if (chars[element] > maxCount) {
      maxCount = chars[element];
      maxChar = element;
    }
  });

  return maxChar;
}

module.exports = maxChar;
