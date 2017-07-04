const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
const saltPassword = require('../utils/saltPassword');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

module.exports = {
    test(req, res) {
        res.send({ hi: 'works' });
    },

    signup(req, res, next) {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        if (!email || !username || !password) {
            return res.status(422)
                    .send({ error: 'email, username, password can not be empty'});
        }

        User.findOne({ email }, function(err, existingUser) {
            if (err) { return next(err); }

            if (existingUser) {
                res.status(422).send({ error: 'email exists'});
            }

            const saltedPassword = saltPassword.makePasswordEntry(password);

            const user = new User({
                email: email,
                username: username,
                password: saltedPassword.hash,
                salt: saltedPassword.salt
            });

            user.save(function(err, newUser) {
                if (err) { return next(err); }

                return res.json({ token: tokenForUser(user) });
            });
        });
    },

    signin(req, res, next) {
        return res.json({ token: tokenForUser(req.user) });
    }
}
