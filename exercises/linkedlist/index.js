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
  getFirst() {
    return this.head;
  }

  // Returns the last node of the linked list
  getLast() {
    if (!this.head) {
      return null;
    }
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  // Empties the linked list of any nodes.
  clear() {
    this.head = null;
  }

  // Removes only the first node of the linked list
  // The list's head should now be the second element.
  removeFirst() {
    this.head = this.head.next;
  }

  // Removes the last node of the chain
  removeLast() {}
}

module.exports = { Node, LinkedList };
