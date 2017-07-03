const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const authRouter = require('./routes/auth_router');

// config mongoose Promise
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/food');
}

const app = express();

// middleware
app.use(bodyParser.json());

// routers
authRouter(app);

module.exports = app;
