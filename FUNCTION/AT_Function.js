// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.
//  Negative integers count back from the last item in the array.

// Syntax 
// at(index)

// Return Value

// The element in the array matching the given index.Always returns undefined if index < -array.
// length or index >= array.length without attempting to access the corresponding property.
// Return the last value of an array



const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Add an item to our 'cart' array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'