// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

// difference BF vs DF: BF push children to end of array.
// DF unshift children to start of array

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  // add node to children array
  add(data) {
    this.children.push(new Node(data));
  }

  //  given data, look at each child of current node
  // remove any node with data === data
  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  // traverse tree Breadth First
  // invoke fn with each node
  traverseBF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const currNode = arr.shift();
      arr.push(...currNode.children);
      fn(currNode);
    }
    return;
  }

  traverseDF(fn) {
    let arr = [this.root];
    while (arr.length) {
      let currNode = arr.shift();
      //  add children to start of array
      arr.unshift(...currNode.children);
      fn(currNode);
    }
    return;
  }
}

module.exports = { Tree, Node };
