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

  // Creates a new Node from argument 'data',
  // assigns the resulting node to the 'head' property.
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // Returns the number of nodes in the linked list.
  size() {
    let count = 0;
    let nextNode = this.head;
    while (nextNode) {
      count++;
      nextNode = nextNode.next;
    }
    return count;
  }
  
  // Returns the first node of the linked list.
  getFirst() {}
}

module.exports = { Node, LinkedList };
