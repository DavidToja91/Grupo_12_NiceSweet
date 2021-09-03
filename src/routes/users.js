var express = require('express');
var router = express.Router();
let { register, processRegister, 
    login, processLogin, profile, 
    edit, logout } = require('../controllers/usersController');
let loginValidator = require('../validations/loginValidator');
let editProfileValidator = require('../validations/editProfileValidator');
let registerValidator = require('../validations/registerValidator')
let multer= require('multer');
let path=require('path');

const storage= multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,path.join(__dirname, '../images/users'))
    },
    filename: (req,file,cb)=>{
        console.log(file);
        const newFilename='user-'+ Date.now() + path.extname(file.originalname);
        cb(null,newFilename);
    }
});
const upload= multer({storage});


// Rutas //
router.get('/register', register);
router.post('/register',registerValidator ,upload.single('avatar'), processRegister);

router.get('/login', login);
router.post('/login', loginValidator, processLogin, login);
router.get('/logout', logout);

router.get('/profile', profile);

router.get('/profile', edit);
router.patch('/profile', editProfileValidator, edit);

module.exports = router;