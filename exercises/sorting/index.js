// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// O(n^2)
// find largest, move to right
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

// O(n^2) -- "prove me wrong algorithm"
// take current index, set as indexOfMin
// loop to prove wrong, comparing
// make swap if i != indexOfMin
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

// recursive
function mergeSort(arr) {
  return arr;
}

// iterative
// given two sorted arrays, return merged sorted array
function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    left[0] < right[0]
      ? results.push(left.shift())
      : results.push(right.shift());
  }
  // push remainder
  return [...results, ...left, ...right];
}
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
