var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var favicon = require('serve-favicon');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/disel', {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
var productRouter = require('./routes/product');
var workbenchRouter = require('./routes/workbench');
var dashboardRouter = require('./routes/dashboard');
var trasactionRouter = require('./routes/transaction');

var app = express();

require('./config/passport')(passport);


app.use(favicon(__dirname + '/public/images/favicon.ico'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/products/create', express.static('public'));
app.use('/products/show', express.static('public'));
app.use('/product/', express.static('public'));
app.use('/users/', express.static('public'));
app.use('/workbench/', express.static('public'));
app.use('/dashboard', express.static('public'));
app.use('/transaction', express.static('public'));
app.use('/transaction/create', express.static('public'));


// Express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Connect flash
app.use(flash())

// Global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/product', productRouter);
app.use('/workbench', workbenchRouter);
app.use('/dashboard', dashboardRouter);
app.use('/transaction', trasactionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
