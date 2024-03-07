const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

//connect to mongodb
const dbURI =
  'mongodb+srv://lonestar0825:mongodb@nodecourse.yugwvfs.mongodb.net/node-cousre?retryWrites=true&w=majority';
// 'mongodb+srv://lonestar0825:mongodb@nodecourse.yugwvfs.mongodb.net/?retryWrites=true&w=majority&appName=node-cousre';

mongoose
  .connect(dbURI)
  .then((result) => {
    //listen for request
    app.listen(3000);
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set('view engine', 'ejs');
// app.set("views", 'file_type')

//middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));

//custom middleware
// app.use((req, res, next) => {
//   console.log('New request made:');
//   console.log('\tHost: ', req.hostname);
//   console.log('\tPath: ', req.path);
//   console.log('\tMethod: ', req.method);
//   next();
// });

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'New First Blog',
    snippet: 'About my first blog...',
    body: 'More about my first blog.',
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('65e94e5323484d4f00ffcaaa')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//routes
app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'First blog',
      snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Second blog',
      snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Third blog',
      snippet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
  ];
  //   res.send("<p>Home Page</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render('about', { title: 'About' });
});

//redirect
// app.get("/about_us", (req, res) => {
//   res.redirect("/about");
// });

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'New' });
});

//404
//fires for every url if it reaches till here
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.render('404', { title: 'Not Found' });
});
