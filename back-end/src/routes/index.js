const { Router } = require('express');
const productsRouter = require('./products-route');
const usersRouter = require('./users-route');
const adminRouter = require('./adminRouter');
const salesRouter = require('./sales-route');

const routes = Router();

routes.use('/login', usersRouter);
routes.use('/products', productsRouter);
routes.use('/admin/manage', adminRouter);
routes.use('/sales', salesRouter);

module.exports = routes;
