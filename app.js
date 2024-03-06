const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");
// app.set("views", 'file_type')

//listen for request
app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<p>Home Page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index");
});
app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

//redirect
// app.get("/about_us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//404
//fires for every url if it reaches till here
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.render("404");
});
