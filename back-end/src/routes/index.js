const { Router } = require('express');
const productsRouter = require('./products-route');
const usersRouter = require('./users-route');
const adminRouter = require('./adminRouter');

const routes = Router();

routes.use('/login', usersRouter);
routes.use('/products', productsRouter);
routes.use('/admin/manage', adminRouter);

module.exports = routes;
