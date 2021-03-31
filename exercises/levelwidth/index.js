// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// solution: like Breadth First Search
// use a stopper token.
// added at the end of level
// otherwise,
// same method as BFD

function levelWidth(root) {
  let levels = [0];
  let arr = [root, "s"];

  // stop when stopper token is only element
  while (arr.length > 1) {
    // get first element
    let currNode = arr.shift();

    // check if done with level
    if (currNode === "s") {
      // set up counter for next level
      // then add back stopper token
      levels.push(0);
      arr.push("s");
    } else {
      // increment level counter
      // continue adding children of current level
      levels[levels.length - 1]++;
      arr.push(...currNode.children);
    }
  }
  return levels;
}

module.exports = levelWidth;
