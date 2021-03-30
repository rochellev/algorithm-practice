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
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  // Removes the last node of the chain
  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }
    let lastNode = this.head;
    let prevNode = null;
    while (lastNode.next) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    prevNode.next = null;
  }

  // 	Inserts a new node with provided data at the end of the chain
  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  // Returns the node at the provided index
  // note: zero indexed
  getAt(i) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === i) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  // Removes node at the provided index
  removeAt(i) {
    if (!this.head) {
      return;
    }
    // trying to remove first element
    if (i == 0) {
      this.head = this.head.next;
      return;
    }
    let previousNode = this.getAt(i - 1);
    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next;
  }

  // Create an insert a new node at provided index
  // If index is out of bounds, add the node to the end of the list.
  insertAt(data, i) {
    // list empty
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (i === 0) {
      this.insertFirst(data);
      return;
    }
    const previous = this.getAt(i - 1) || this.getLast();
    previous.next = new Node(data, previous.next);

    // let previousNode = this.getAt(i - 1);
    // if (!previousNode || !previousNode.next) {
    //   this.insertLast(data);
    //   return;
    // }
    // previousNode.next = new Node(data, previousNode.next)
    return;
  }

  // 	Calls the provided function with every node of the chain
  forEach(fn) {}
}

module.exports = { Node, LinkedList };
