var express = require('express');
var router = express.Router();
let { register, login, profile, editProfile,updateProfile, processRegister,processLogin,logout } = require('../controllers/usersController');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator')
let upload = require('../middlewares/uploadAvatar');
const userSession = require('../middlewares/userSession');

// Rutas
router.get('/register', register);
router.post('/register', upload.single('avatar'), registerValidator, processRegister);

router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

router.get('/profile', userSession, profile);
router.get('/edit/:id', editProfile);
router.put('/edit/:id', upload.single('avatar'), updateProfile);

module.exports = router;