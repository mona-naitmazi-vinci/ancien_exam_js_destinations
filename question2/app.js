const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const pizzaRouter = require('./routes/pizzas');
const placeRouter = require('./routes/places');
const userRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/pizzas', pizzaRouter);
app.use('/places', placeRouter);
app.use('/users', userRouter);

module.exports = app;
