// const http = require("http");
// const fs = require("fs");
// const _ = require("lodash");

// const server = http.createServer((request, response) => {
//   //lodash
//   const num = _.random(0, 20);
//   console.log(num);

//   const greet = _.once(() => {
//     console.log("Hello!");
//   });

//   greet();
//   greet(); //doest not run a second time

//   //set header content type
//   response.setHeader("Content-Type", "text/html");

//   //   response.write('<head><link rel="stylesheet" href="#" /></head>');
//   //   response.write("<p>Hello Laxmi!</p>");
//   //   response.write("<p>Hello again!!</p>");
//   //   response.end();

//   let path = "./views/";
//   switch (request.url) {
//     case "/":
//       path += "index.html";
//       response.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       response.statusCode = 200;
//       break;
//     case "/about_me":
//       response.statusCode = 301;
//       response.setHeader("Location", "./about");
//       response.end();
//       break;
//     default:
//       path += "404.html";
//       response.statusCode = 404;
//       break;
//   }

//   //   fs.readFile("./views/index.html", (err, data) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       response.end();
//     } else {
//       //   response.write(data);
//       //   response.end();
//       response.end(data); //for one time
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("Listening for requests on port 3000");
// });
