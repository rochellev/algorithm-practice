// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// need to consider entire tree.
//
function validate(node, min = null, max = null) {
  // check child is less than node
  // skipped for root node
  if (max != null && node.data > max) {
    return false;
  }
  if (min != min && node.data < min) {
    return false;
  }

  // update max when moving to left
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  // update min when moving to right
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
}

module.exports = validate;
