var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require ("./config/database");
var auth =require('./auth/main_auth');

var empleadosRouter =require('./routes/empleados.router');
var productosRouter =require('./routes/productos.router');
var actividadesRouter =require('./routes/actividades.router');
var usurariosRouter =require('./routes/usuarios.router');


var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongo connect 
database.mongoConnect();
//autenticacion de usuario
app.use('/usuarios', usurariosRouter);
app.use(auth);

//routers

app.use('/empleados', empleadosRouter);
app.use('/productos', productosRouter);
app.use('/actividades', actividadesRouter);

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