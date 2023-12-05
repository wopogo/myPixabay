//module
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//page Router
const indexRouter = require('./routes/index');
const categoryRouter = require('./routes/category');
const searchRouter = require('./routes/search');
app.use('/', indexRouter);
app.use('/', categoryRouter);
app.use('/search', searchRouter);

app.use(express.static('public'));

//404 error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that");
})

//500 error
app.use((err, req, res, next) => {
  res.status(500).send('Something broken!');
});

//port
app.listen(80, () => {
  console.log("Success web operation!")
});