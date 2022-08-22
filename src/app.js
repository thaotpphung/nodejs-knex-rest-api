const express = require('express');
const { setup } = require('../di-setup');
const apiErrorHandler = require('./error/handler');

setup();
const router = require('./routes');

const app = express();
app.use(express.json());
app.use('/', router);
app.use(apiErrorHandler);

module.exports = app;
