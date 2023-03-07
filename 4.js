// ===============================================NAME FUNCTION=========================================================
// 1.
// function FUN_ONE() {
//     return "Welcome To Named Function"
// }
// console.log (typeof FUN_ONE)
// console.log (FUN_ONE())

// 2.
// function FUN_ONE ()
// {
//     return "Welcome"
// }
// console.log (FUN_ONE ())

// 3.
// function FUN_ONE (arg1,arg2,arg3)
// {
//     console.log (arg1,arg2,arg3)
// }
// FUN_ONE ("Angular13","Node Js","Mongo Db")
// FUN_ONE ("React Js","Node Js","Mongo Db")
// FUN_ONE ("Node Js")
// FUN_ONE (undefined,"Node Js")
// FUN_ONE (null,null,null)

// 4.  Write a Javascript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223


// 5. Write a Javascript function that checks whether a passed string is palindrome or not? 

// let str = "sheetal", str1 = "", ans = -1;
// function checkpalindrom_str(str) {
//     console.log("str:", str);
//     const len = str.length;
//     console.log("length:", len);
//     for (i = len - 1; i >= 0; i--) {
//         str1 = str1 + str[i];
//     }
//     console.log("reveres :", str1);
// }

// function palindrom_str(str) {
//     checkpalindrom_str(str);
//     if (str == str1) {
//         ans = 1;
//         //  console.log("sring is palindrom")
//     }
//     else {
//         ans = 0;
//         // console.log("sring is not palindrom")
//     }

//     if (ans == 1)
//         console.log("sring is palindrom")
//     else
//         console.log("sring is not palindrom")


// }
// palindrom_str(str);


// 6. Write a Javascript function that accepts a string as a parameter and counts the number of vowels within the string.

// let str = "hello skillqode", i, count = 0, ans;

// function findvowles(str) {
//     console.log("str :", str);
//     const len = str.length;
//     console.log("length :", len);
//     for (i = 0; i <= len - 1; i++)
//         if (str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'I' || str[i] == 'i' || str[i] == 'o' || str[i] == 'O' || str[i] == 'U' || str[i] == 'u') {
//             count++;
//             ans = 0
//         }
//         else {
//             ans = 1;
//         }
//     if (ans == 0) {
//         console.log("vowles:", count);
//     }
//     else {
//         console.log("vowles are not found");
//     }
// }
// findvowles(str)

// 7.
// function fun_one(arg) {
//     console.log (arg);
// }                                   output : test
// function test ()                             return_test
// {
//     console.log ("test")
//     return "return_test"
// }
// fun_one(test ());

// 8.
// function fun_one(arg) {
//         console.log ("Before Function")
//     console.log (arg);
// }                                       //output : test
// function test ()                                // undefined
// {
//     console.log ("After Function ")
// }
// fun_one(test ());

// 9.
// function fun_one (arg)
// {
//     arg ();
//     console.log ("Before Function")
// }
// function test() {
//     console.log ("After function")
// }
// fun_one(test);

// 10.

// function fun_one(arg1,arg2,arg3) 
// {
//     console.log ("Before Function............")
//     console.log (arg1(),arg2(),arg3());
// }
// function fun_two ()
// {
//     console.log ("After Function............")
//     console.log ("Hello_1")
// }
// function fun_three() {
//     console.log ("After Function...........")
//     console.log ("Hello_2")
// }
// function fun_four() {
//     console.log ("After Function...........")
//     console.log ("Hello_3")
// }
// fun_one(fun_two,fun_three,fun_four)

// // 11.
// function fun_one(arg1,arg2,arg3) 
// {
//     console.log ("Before Function............")
//     // console.log (arg1(),arg2(),arg3());
//     console.log (arg1,arg2,arg3)               // OUTPUT : [Function: fun_two] [Function: fun_three] [Function: fun_four]
// }
// function fun_two ()
// {
//     console.log ("After Function............")
//     console.log ("Hello_1")
//     return "Hello_1..."
// }
// function fun_three() {
//     console.log ("After Function...........")
//     console.log ("Hello_2")
//     return "Hello_2..."
// }
// function fun_four() {
//     console.log ("After Function...........")
//     console.log ("Hello_3")
//     return "Hello_3..."
// }
// fun_one(fun_two,fun_three,fun_four)

