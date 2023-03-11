const fs = require("fs");
fs.readdir("E:\\Node_6",readDirCompleted);
function readDirCompleted (error,file)
{
    if (error)
    {
        console.log (error);
    }
    else
    {
        for (var i=0 ; i<file.length ; i++)
        {
            console.log (file[i]);
            // console.log (file[i].indexOf(".")>-1?"file :":"folder","-",file[i]);
        }
    }
}