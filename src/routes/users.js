var express = require('express');
var router = express.Router();
let { register, login, profile, edit } = require('../controllers/usersController');
let loginValidator = require('../validations/loginValidator');
let editProfileValidator = require('../validations/editProfileValidator');

router.get('/register', register);
router.post('/register', register);

router.get('/login', login);
router.post('/login', loginValidator, login);

router.get('/profile', profile);

router.get('/profile', edit);
router.patch('/profile', editProfileValidator, edit);

module.exports = router;