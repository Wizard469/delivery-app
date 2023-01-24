const express = require('express');
const routes = require('../routes');
const errorMiddleware = require('../utils/error/errorMiddleware');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
