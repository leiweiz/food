const User = require('../models/user');

module.exports = {
    test(req, res) {
        res.send({ hi: 'works' });
    }
}
