var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require("express-partials")
var index = require('./routes/index')
var api = require('./routes/api/apiRouter')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'admin')));

app.use(session({
  secret: 'luoxia.me',
  key: 'hackthon',
  cookie:{
    maxAge:1000 * 60 * 60 * 24 * 30
  },
  store:new MongoStore({
    db: 'hackthon',
    host:'localhost',
    port: 27520,
    username: 'laoqiren',
    password: 'luoxia.me'
  })
}));

app.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials",true);
  next();
});

app.use('/', index);

app.use('/api',api);


//app.use('/users', users);

// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/*
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
module.exports = app;
