const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080',
};

const usersRouter = require('./routes/users');
const pizzaRouter = require('./routes/pizzas');
const authsRouter = require('./routes/auths');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/pizzas', cors(corsOptions), pizzaRouter);
app.use('/auths', authsRouter);

module.exports = app;
