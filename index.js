const fs = require("fs");

////////////////////////?
////////?FILES

//?BLOCKING: Synchronous way-executing line by line ,one after the other
//reading a file
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);
//writing a file
const textOutput = `This is a fact about avocados: ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/input.txt", textOutput);
console.log("The file has been written!");
