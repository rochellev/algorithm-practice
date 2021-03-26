// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

// another way is to do work for remove and peek
// i prefer my method because only add does the heavy logic
// this solution has repeated logic
class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  add(record) {
    this.stackA.push(record);
  }
  remove() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    const firstRecord = this.stackB.pop();
    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return firstRecord;
  }
  peek() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    const firstRecord = this.stackB.peek();
    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return firstRecord;
  }
}

// my way does the ordering work in add method

// class Queue {
//   constructor() {
//     this.stackA = new Stack();
//     this.stackB = new Stack();
//   }
//   add(record) {
//     // pop all records out of stackA
//     while (this.stackA.peek()) {
//       this.stackB.push(this.stackA.pop());
//     }
//     // add in new one to "last" position
//     this.stackA.push(record);
//     // re-pop everything from b to a
//     while (this.stackB.peek()) {
//       this.stackA.push(this.stackB.pop());
//     }
//   }
//   remove() {
//     return this.stackA.pop();
//   }
//   peek() {
//     return this.stackA.peek();
//   }
// }

module.exports = Queue;
