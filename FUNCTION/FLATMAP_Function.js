// Array.prototype.flatMap()
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()),
//  but slightly more efficient than calling those two methods separately.

//  Syntax
// Arrow function
// flatMap((element) => { /* … */ })
// flatMap((element, index) => { /* … */ })
// flatMap((element, index, array) => { /* … */ })

// Callback function
// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

// Inline callback function
// flatMap(function (element) { /* … */ })
// flatMap(function (element, index) { /* … */ })
// flatMap(function (element, index, array) { /* … */ })
// flatMap(function (element, index, array) { /* … */ }, thisArg)

// Return value
// A new array with each element being the result of the callback function and flattened by a depth of 1.

const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]
