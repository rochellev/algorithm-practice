// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// if no next passed in, so set default to null
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Creates a new Node from argument 'data'
  // assigns the resulting node to the 'head' property.
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };
