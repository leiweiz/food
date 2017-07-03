require('../services/passport');
const passport = require('passport');
const authController = require('../controllers/auth_controller');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    app.get('/api', requireAuth, authController.test);

    app.post('/signin', requireSignin, authController.signin);
    app.post('/signup', authController.signup);
}
