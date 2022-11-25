require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const productosRouter =require('./routes/productos.router');
const actividadesRouter =require('./routes/actividades.router');
const usurariosRouter =require('./routes/usuarios.router');
const { SECRET, MONGODB_URI } = require('./config');
const { mongoConnect } = require('./config/database');
require('./config/passport');


const app = express();

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
//autenticacion de usuario
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: MONGODB_URI})
  })
);
  
  
app.use(passport.initialize());
app.use(passport.session());


//routers
app.use(usurariosRouter);
app.use('/productos', productosRouter);
app.use('/actividades', actividadesRouter);

mongoConnect();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json(err);
// });


module.exports = app;
