// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// (0) my solution
// slice up and increse i by size
// slice(start, end)-- does not include end element
// omitted end -- select rest of array
// function chunk(array, size) {
//   let chunks = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunks.push(array.slice(i, i + size));
//   }
//   return chunks;
// }

// (1) obvious one lol
// more iterative, look at last approach
// function chunk(array, size) {
//   let chunks = [];
//   for(let element of array){
//     let last = chunks[chunks.length -1];
//     if(!last || last.length === size){
//       chunks.push([element])
//     }else{
//       last.push(element)
//     }
//   }
//   return chunks;
// }

// (2) his slice solution
// using slice(start, end not included)
// while loop makes more sense here
function chunk(array, size) {
  let chunked = [];
  let i = 0;
  while(i < array.length){
    chunked.push(array.slice(i, i+size))
    i+=size;
  }
  return chunked;
}

module.exports = chunk;
