var express = require('express');
var router = express.Router();
let { register, login } = require('../controllers/usersController');

router.get('/register', register);
router.get('/login', login);

module.exports = router;