const express = require('express');
const productsRouter = require('../routes/products-route');

const app = express(); // temporary

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/products', productsRouter);

module.exports = app;
