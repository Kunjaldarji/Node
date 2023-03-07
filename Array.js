let arr = [10, 20, "thirty", 40, " 50", "60", 70, 80, 90, 100];

// console.log(typeof (arr));   //object 
// console.log(arr);    //full array  value 

// console.log(arr[2]); //thirty 
//  
// console.log(arr["2"]);       //thirty 

// console.log(arr[3.0]);//40 
// arr[3.2]="3.2"; 
// console.log(arr[3.2]);   //3.2 
// console.log( arr); 

// arr["name"]="skill"; 
//console.log(arr["name"]);   //skill 
// console.log(arr.name); 

// let arry=[10,20,"thirty",40,[100,"thousand"],"60",70,80,90,100]; 
// console.log(arry[4][1][3]); 

// console.log(arry[4][0]); 
// let twoDarr=[[10,20,30],[40,50,60],[70,80,90]]; 
// console.log(twoDarr); 
// console.log(twoDarr[1][1]); 
// console.log(twoDarr.length); 



let arry = [10, 20, 30, 40, 50, 60, 70];
console.log(arry[0],arry[1],arry[2],arry[3],arry[4],arry[5],arry[6]); 
console.log(arry[-1]);

// ================================================================================================================================

//DELETE
//Delete The Particular

// let arr2 = [10,20,30,40,50,60,70,80,90,100]
// console.log (arr2.length)
// arr2[19]=200
// console.log (arr2)
// delete arr2 [4]
// delete arr2 [6]
// delete arr2 [8]
// console.log (arr2)
// arr2[4]=undefined
// arr2[5]=undefined
// delete arr2[7]
// delete arr2[9]
// arr2 [8] = undefined
// console.log (arr2)

// let arr2 = [20,30,40];
// console.log (arr2)
// arr2.push (50)
// console.log (arr2)
// console.log (arr2.length)
// arr2.pop()
// console.log (arr2)
// console.log (arr2.length)

// let arr2 = [20, 30, 40];
// arr2.unshift(10)
// arr2.unshift(9)
// arr2.unshift(8)
// console.log(arr2)
// console.log(arr2.length)
// arr2.shift()
// console.log(arr2)
// console.log(arr2.length)

// =================================================== 2/2/2023 ====================================================
// =============================================== SPLICE FUNCTION ========================================================

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
// To access part of an array without modifying it, see slice().

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

let array = [10,  20,  30,  40,  50,  60,  70,  80,  90,  100]
// + ve i  0,   1,   2,   3,   4,   5,   6,   7,   8,   9,   10
// - ve i     -10   -9   -8   -7   -6   -5   -4,  -3,  -2,  -1

// array.splice (4);                      [ 10, 20, 30, 40 ]
// array.splice (-4);                     [ 10, 20, 30, 40, 50, 60 ]
// array.splice (4,1)                     [ 10, 20, 30,  40, 60, 70, 80, 90, 100 ]
// array.splice (-4,2)                    [ 10, 20, 30,  40, 50, 60, 90, 100 ]
// array.splice (4,20)                    [ 10, 20, 30, 40 ]
// array.splice (-4,20)                   [ 10, 20, 30, 40, 50, 60 ]
// array.splice (10)                      [ 10, 20, 30,  40, 50, 60, 70, 80, 90, 100 ]
// array.splice (-1)                      [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
// array.splice (0)                       []
// array.splice (4,1,500)                 [ 10, 20, 30,  40, 500, 60, 70, 80, 90, 100 ]
// array.splice (4,2,500)                 [ 10, 20, 30, 40, 500, 70, 80, 90, 100 ]
// array.splice (-4,2,500)                [ 10, 20,  30, 40, 50, 60, 500, 90, 100]
// array.splice (4,2,600,700)             [ 10, 20, 30, 40, 600, 700, 70, 80, 90, 100 ]
// console.log (array)

// let arr1 = []
// for (let i=1;i<=100;i++)
// {
//     arr1.push(i)
// }
// console.log (arr1);

// const array1 = ['a', 'b', 'c'];

// const A = array1.entries();

// console.log(A.next().value);
// // Expected output: Array [0, "a"]

// console.log(A.next().value);
// // Expected output: Array [1, "b"]

// ---------------------------------------------------------------------------------------------------------------------------------

// Array.prototype.fill()
// The fill() method changes all elements in an array to a static value,
//  from a start index (default 0) to an end index (default array.length). It returns the modified array.
// SYNTAX
// fill(value)
// fill(value, start)
// fill(value, start, end)

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// // Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // Expected output: Array [1, 2, 0, 0]

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

// =========================================================================================================================

// Array.prototype.find()

// The find() method returns the first element in the provided array that satisfies the provided testing function.
//  If no values satisfy the testing function, undefined is returned.

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 2);

// console.log(found);

// SYNTAX

// // Arrow function
// find((element) => { /* … */ })
// find((element, index) => { /* … */ })
// find((element, index, array) => { /* … */ })

// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function (element) { /* … */ })
// find(function (element, index) { /* … */ })
// find(function (element, index, array) { /* … */ })
// find(function (element, index, array) { /* … */ }, thisArg)

