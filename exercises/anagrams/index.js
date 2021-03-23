// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// (0) my solution
// regex to replace non characters with empty string
// function anagrams(stringA, stringB) {
// let a = stringA.replace(/[^\w]/g, "").toLowerCase();
// let b = stringB.replace(/[^\w]/g, "").toLowerCase();
//   if (a.length != b.length) {
//     return false;
//   }
//   // keys: letter, value: count of given letter
//   let mapA = {};
//   let mapB = {};
//   a.split("").forEach(e => (mapA[e] = mapA[e] + 1 || 1));
//   b.split("").forEach(e => (mapB[e] = mapB[e] + 1 || 1));
//   // simple check against each character and count
//   for (let char in mapA) {
//     if (mapA[char] != mapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// (1) use helper function to build character map
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   let map = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     map[char] = map[char] + 1 || 1;
//   }
//   // str.split("").forEach(e => (map[e] = map[e] + 1 || 1));
//   return map;
// }

// (2) using sort for alphabetical order
// since sort only works on arrays, need the split then sort then join again
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
