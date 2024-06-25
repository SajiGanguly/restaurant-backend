const express = require('express');
const  loginUser  = require('../Controllers/loginControllers');

const app = express();

app.use('/login', loginUser);

module.exports = app;
