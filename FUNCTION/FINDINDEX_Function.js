// Array.prototype.findIndex()
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
//  If no elements satisfy the testing function, -1 is returned.

// Syntax
// // Arrow function
// findIndex((element) => { /* … */ })
// findIndex((element, index) => { /* … */ })
// findIndex((element, index, array) => { /* … */ })

// // Callback function
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// // Inline callback function
// findIndex(function (element) { /* … */ })
// findIndex(function (element, index) { /* … */ })
// findIndex(function (element, index, array) { /* … */ })
// findIndex(function (element, index, array) { /* … */ }, thisArg)

// Return value
// The index of the first element in the array that passes the test. Otherwise, -1.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
