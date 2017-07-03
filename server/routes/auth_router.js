require('../services/passport');
const passport = require('passport');
const authController = require('../controllers/auth_controller');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
    app.get('/api', requireAuth, authController.test);

    app.post('/signup', authController.signup);
}
