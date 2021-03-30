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

class LinkedList {}

module.exports = { Node, LinkedList };
