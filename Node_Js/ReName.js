const fs = require("fs");
fs.rename("Demo.txt", "newFile.txt", renameingCompleted);
function renameingCompleted(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("File Remed.....");
  }
}
