const express = require('express');

const app = express(); // temporary

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
