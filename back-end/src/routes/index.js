const { Router } = require('express');
const productsRouter = require('./products-route');
const loginRouter = require('./login-route');
const registerRouter = require('./register-route');
const adminRouter = require('./adminRouter');
const salesRouter = require('./sales-route');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/register', registerRouter);
routes.use('/products', productsRouter);
routes.use('/admin/manage', adminRouter);
routes.use('/sales', salesRouter);

module.exports = routes;
