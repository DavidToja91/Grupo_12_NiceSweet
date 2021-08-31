var express = require('express');
var router = express.Router();
let { register, login, profile, edit } = require('../controllers/usersController');

router.get('/register', register);
router.post('/register', register);

router.get('/login', login);
router.post('/login', login);

router.get('/profile', profile);

router.get('/profile', edit);
router.patch('/profile', edit);

module.exports = router;