const express = require('express');
const router = express.Router();
const controlerUser = require('../controllers/user');

router.post('/signup', controllerUser.signup);
router.post('/login', controllerUser.login);

module.exports = router;