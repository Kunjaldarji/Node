// Array.prototype.findLastIndex()
// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
//  If no elements satisfy the testing function, -1 is returned.

// See also the findLast() method, which returns the value of last element that satisfies the testing function (rather than its index).

// Syntax
// // Arrow function
// findLastIndex((element) => { /* … */ })
// findLastIndex((element, index) => { /* … */ })
// findLastIndex((element, index, array) => { /* … */ })

// // Callback function
// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)

// // Inline callback function
// findLastIndex(function (element) { /* … */ })
// findLastIndex(function (element, index) { /* … */ })
// findLastIndex(function (element, index, array) { /* … */ })
// findLastIndex(function (element, index, array) { /* … */ }, thisArg)

// Return value
// The index of the last (highest-index) element in the array that passes the test. Otherwise -1 if no matching element is found.


const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130