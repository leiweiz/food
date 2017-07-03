const authController = require('../controllers/auth_controller');

module.exports = (app) => {
    app.get('/api', authController.test);
}
