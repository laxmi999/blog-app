const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blog_routes = require('./routes/blog_routes');

//express app
const app = express();

//connect to mongodb
const dbURI =
  'mongodb+srv://lonestar0825:mongodb@nodecourse.yugwvfs.mongodb.net/node-cousre?retryWrites=true&w=majority';

mongoose
  .connect(dbURI)
  .then((result) => {
    //listen for request
    app.listen(3000);
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Error in connecting to database:');
    console.log(err);
  });

//register view engine
app.set('view engine', 'ejs');
// app.set("views", 'file_type')

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs/', blog_routes);

//404
//fires for every url if it reaches till here
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.render('404', { title: 'Not Found' });
});

//custom middleware
// app.use((req, res, next) => {
//   console.log('New request made:');
//   console.log('\tHost: ', req.hostname);
//   console.log('\tPath: ', req.path);
//   console.log('\tMethod: ', req.method);
//   next();
// });

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'New First Blog',
//     snippet: 'About my first blog...',
//     body: 'More about my first blog.',
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
