const express = require("express");

//express app
const app = express();

//listen for request
app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<p>Home Page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about_us", (req, res) => {
  res.redirect("/about");
});

//404
//fires for every url if it reaches till here
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
