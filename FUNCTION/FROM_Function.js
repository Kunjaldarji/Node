// Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// Syntax
// Array.from(arrayLike)

// // Arrow function
// Array.from(arrayLike, (element) => { /* … */ })
// Array.from(arrayLike, (element, index) => { /* … */ })

// // Mapping function
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// // Inline mapping function
// Array.from(arrayLike, function (element) { /* … */ })
// Array.from(arrayLike, function (element, index) { /* … */ })
// Array.from(arrayLike, function (element) { /* … */ }, thisArg)
// Array.from(arrayLike, function (element, index) { /* … */ }, thisArg)

// Return value
// A new Array instance.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]
