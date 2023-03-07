// Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.

// Syntax
// // Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// // Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// // Inline callback function
// forEach(function (element) { /* … */ })
// forEach(function (element, index) { /* … */ })
// forEach(function (element, index, array) { /* … */ })
// forEach(function (element, index, array) { /* … */ }, thisArg)

// Return value
// undefined.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
