const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [ true, "email can not be empty!"]
    },
    username: {
        type: String,
        required: [ true, "username can not be empty!"]
    },
    password: {
        type: String,
        required: [ true, "password can not be empty!"]
    },
    salt: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
