const express = require('express');
const router = express.Router();

// Controller
const {register, processRegister,
login, processLogin,
profile, logout} = require('../controllers/userController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruotes
router.get('/register', guestMiddleware, register);
router.post('/register', uploadFile.single('avatar'), validations, processRegister);

router.get('/login', guestMiddleware, login);
router.post('/login', processLogin);

router.get('/profile/', authMiddleware, profile);
router.get('/logout/', logout);

module.exports = router;