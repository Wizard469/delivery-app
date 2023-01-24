const { Router } = require('express');
const productsRouter = require('./products-route');
const usersRouter = require('./users-route');

const routes = Router();

routes.use('/login', usersRouter);
routes.use('/products', productsRouter);

module.exports = routes;
