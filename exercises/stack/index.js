// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(record) {
//     this.data.unshift(record);
//   }
//   pop() {
//     return this.data.shift();
//   }
//   peek() {
//     return this.data[0];
//   }
// }

// he just took from end of array instead
// i was using the first items

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
