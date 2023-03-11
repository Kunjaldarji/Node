// const fs = require("fs");

// fs.readFile("Node_Js\\Demo.txt",(err,data) =>{
//     if (err) throw err;
//     else console.log (data.toString());
// });



const fs = require("fs")

const result = fs.readFileSync("Node_Js\\Demo.txt");
console.log (result.toString());