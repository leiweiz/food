const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// config mongoose Promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/food');

const app = express();

// middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("works");
});

module.exports = app;
