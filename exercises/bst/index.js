// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  // recursive solution
  // recursive call when there is a left node
  // this.left is an instance of Node,
  // so it has access to the insert method
  // otherwise, check value and add new node
  // then do same checks for right side
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  // take advantage of value rules
  // left child must be less than parent
  // right child must be greater than parent
  contains(data) {
    if (data === this.data) {
      return this;
    }

    if (this.data > data && this.left) {
      return this.left.contains(data);
    } else if (this.data < data && this.right) {
      return this.right.contains(data);
    }
    return null;
  }
}

module.exports = Node;
