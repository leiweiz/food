const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const authRouter = require('./routes/auth_router');

// config mongoose Promise
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/food');
}

const app = express();

// before-handle middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json({ type: '*/*' }));

// routers
authRouter(app);

// after-handle middleware
app.use(function(err, req, res, next) {
    res.status(422).send(err.message);
})

module.exports = app;
