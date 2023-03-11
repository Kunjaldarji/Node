// const fs = require("fs");
// fs.copyFile("Node_Js\\Demo1.txt", "Demo1.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rename("Demo1.txt", "Demo1_copy.txt", renameingCompleted);
//     function renameingCompleted(error) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("File Remed.....");
//         fs.writeFile("Demo1_copy.txt", "hello hello", (err) => {
//           if (err) throw err;
//           else {
//             console.log("Writing asynchronously");
//           }
//         });
//       }
//     }
//   }
// });
// Writing the data asynchronously
// ==========================================================================================================================


const fs = require("fs");

fs.readFile("Node_Js\\Demo1.txt", (err, data) => {
  if (err) throw err;
  else {
    console.log(data.toString());
    fs.writeFile("Node_Js\\Demo1.txt", "hello hello", (err) => {
      if (err) throw err;
      else {
        console.log("Writing asynchronously");
        fs.rename("Demo1.txt", "Demo2_copy.txt", renameingCompleted);
        function renameingCompleted(error) {
          if (error) {
            console.log(error);
          } else {
            console.log("File Remed.....");
          }
        }
      }
    });
  }
});
