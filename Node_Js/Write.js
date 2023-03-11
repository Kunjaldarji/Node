// const fs = require("fs");

fs.writeFile("Node_Js\\Demo.txt", "Writing the data asynchronously", (err) => {
  if (err) throw err;
  else {
    console.log("Writing asynchronously");
    
  }});



// ======================================================== WRIREFILESYNC ======================================================


// const fs = require("fs");
// fs.writeFileSync("Node_Js\\Demo.txt","Writing the data asynchronously");



// =================================================================================================================

const fs = require("fs");

fs.writeFile("Node_Js\\Demo.txt", "Writing the data asynchronously", (err) => {
  if (err) throw err;
  else {
    console.log("Writing asynchronously");
    fs.readFile("Node_Js\\Demo.txt",(err,data) =>{
            if (err) throw err;
            else console.log (data.toString());
  })
}})
