const fs = require("fs");
const http = require("http");
const url = require("url");

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

//?NON_BLOCKING: Asynchronous way - using callbacks ,hence making code fast
//TODO:Solve Callback Hell
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("An error occured");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data1}\n${data2}`, "utf-8", (err) => {
        console.log("You'r file has been written");
      });
    });
  });
});
console.log("Will read file!");

//////////////?
//////?SERVER

const server = http.createServer((req, res) => {
  // console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page was not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
