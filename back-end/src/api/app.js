const express = require('express');
const cors = require('cors');
const productsRouter = require('../routes/products-route');
const salesRouter = require('../routes/sales-route');
// const { default: ErrorHandler } = require('./utils/error/errorMiddleware');

const app = express();
app.use(cors());

app.use(express.json());
// app.use(ErrorHandler);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;
