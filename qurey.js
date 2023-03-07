// 1.Write a JS function that reverse a number.

// const array1 = ['1', '2', '3'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// 2.Write a JS function that checks whether a passed string is palindrome or not? 

//     let palindrom=(strvalue)=>{   
//     console.log(strvalue)
//     const stringarr = strvalue.split('')
//     console.log(stringarr);
//     const stringarrrev  = stringarr.reverse()
//     console.log(stringarrrev);
//     const  revstring  = stringarrrev.join('')
//     console.log(revstring);

//   if(strvalue===revstring)
//   {   
//       console.log("string is palindrom");
//   }
//   else
//   {
//       console.log("string is not palindrom"); 
//   }
//         }
//         palindrom("Shital")

// 3.Write a JS function that generates all combinations of a string. 

//  let fun_one = (str) =>{
//         let array = [];
//           for(let i = 0 ;i < str.length; i++)
//         {
//             for(let j = i + 1; j< str.length + 1; j++)
//             {
//                 array.push(str.slice(i , j));
//             }
//         }
//        return array;
//     }
//     console.log(fun_one('shital'));

// const str = "dog";

// console.log(str.slice(0,1));
// console.log(str.slice(0,2));
// console.log(str.slice(0));
// console.log(str.slice(1));
// console.log(str.slice(1,2));
// console.log(str.slice(3));



// 4.Write a JS function that returns a passed string with letters in alphabetical order. 

//   function alphabet_order(str)
//   {
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));

// 5. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// let f_uppercase=(str)=>
// {
//      console.log(str)
//      let str1= str.split(" ");
//       console.log(str1)

//      for(let i=0;i<str1.length;i++)
//      {
//           str1[i] = str1[i][0].toUpperCase()+str1[i].slice(1);
//      }
//      console.log(str1.join(" "));

// }
// f_uppercase("the quick brown fox")

// 6. Write a JS function that input a number and return square & qube of number in aray. 


// let sq_cube=(arr)=>{
//     let array1=[]
//     root =Math.pow(arr,2)
//     array1.push(root)
//     cube =Math.pow(arr,3)
//     array1.push(cube)

//     console.log(array1)


// }
// sq_cube(5)

// 8.Write a JS function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// let array1 = () => {
//     let array1 = [10,20,56,47,82,92,41,58]
//     let len = array1.length
//     array1.sort ();
//     console.log (array1.sort ())
//     console.log ("Second Lowest : " ,array1[1])
//     console.log ("Second Greatest ",array1[len-2])
// }
// console.log (array1());