var express = require('express');
var router = express.Router();
let { register, login, profile } = require('../controllers/usersController');

router.get('/register', register);
router.get('/login', login);
router.get('/profile', profile);

module.exports = router;