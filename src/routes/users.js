var express = require('express');
var router = express.Router();
let { register, login, profile, editProfile, updateProfile, processRegister, processLogin, logout } = require('../controllers/usersController');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
let editProfileValidator = require('../validations/editProfileValidator');
let upload = require('../middlewares/uploadAvatar');
const userSession = require('../middlewares/userSession');
const userSessionLogin = require('../middlewares/userSessionLogin')

// Rutas
router.get('/register', userSessionLogin, register);
router.post('/register', upload.single('avatar'), registerValidator, processRegister);

router.get('/login', userSessionLogin, login);
router.post('/login', loginValidator,  processLogin);
router.get('/logout', logout);

router.get('/profile', userSession, profile);
router.get('/edit/:id', editProfileValidator, editProfile);
router.put('/edit/:id', upload.single('avatar'), updateProfile);

module.exports = router;