const express = require('express');
const productsRouter = require('../routes/products-route');
const { default: ErrorHandler } = require('./utils/error/errorMiddleware');

const app = express();

app.use(express.json());
app.use(ErrorHandler);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/products', productsRouter);

module.exports = app;
