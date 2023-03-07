// Array.prototype.fill()
// The fill() method changes all elements in an array to a static value,
//  from a start index (default 0) to an end index (default array.length). It returns the modified array.

// SYNTAX
// fill(value)
// fill(value, start)
// fill(value, start, end)

// Return value 
// The modified array, filled with value.

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array1.fill(6));
// // Expected output: Array [6, 6, 6, 6]

// console.log([1, 2, 3].fill(4)); // [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
// console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).fill(4)); // [4, 4, 4]

// // A single object, referenced by each slot of the array:
// const arr = Array(3).fill({}); // [{}, {}, {}]
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]