
// const http = require("http");
// console.log (http);
// let server = http.createServer((Request , Response) => {
//     // Response.setHeader ("Content-type", "text/html");
//     // resizeBy.writehead (200,{ "Content-Type": "text/html" })
//     // Response.write("<h1> Hello <h1>");
//     Response.write("<h2> INQUARY FORM </h2>");
//     // console.log (" request rec.. ");
//     Response.end();
// });
// server.listen (7878 , () =>{
//     console.log ("Listning 7878");
// });




// ================================================================================================================
const http = require("http");
console.log (http);
let server = http.createServer((request , Response) =>{
Response.write ("<h1>Hello</h1>");
Response.end ();
});                                                             //7878 is a port number 
server.listen (7878 , ()=>{
    console.log ("listning 7878")
})