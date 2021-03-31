// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// (0) my solutions makes use of getAt(index)
// the other one uses while loop to get nth node
// function fromLast(list, n) {
//   if (n == 0) {
//     return list.getLast();
//   }
//   let slow = list.getFirst();
//   // advance fast by n
//   let fast = list.getAt(n);
//   while (fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return slow;
// }

function fromLast(list, n) {
  if (n == 0) {
    return list.getLast();
  }
  let slow = list.getFirst();
  let fast = list.getFirst();
  // advance fast by n
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  // advance by one until hit last node
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // slow must be n elements behind
  return slow;
}
module.exports = fromLast;
