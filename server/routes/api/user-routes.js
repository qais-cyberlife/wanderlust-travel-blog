const router = require('express').Router();
const {
    login
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/login').post(login);

module.exports = router;