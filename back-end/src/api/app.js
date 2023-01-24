const express = require('express');
const productsRouter = require('../routes/products-route');
const adminRouter = require('../routes/adminRouter');
const errorMiddleware = require('../utils/error/errorMiddleware');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/products', productsRouter);

app.use('/admin/manage', adminRouter);

app.use(errorMiddleware);

module.exports = app;
