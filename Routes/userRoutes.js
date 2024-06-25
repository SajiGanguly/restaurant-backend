const express = require('express');
const userControllers = require('../Controllers/userControllers');
const bookControllers = require('../Controllers/bookingControllers');
const app = express();

app.use('/restaurant',bookControllers);
app.use('/user', userControllers);

module.exports = app;