let {categories, getUsers, writeUsersJson } = require('../data/usersDB');
const{validationResult}= require('express-validator');
const bscrypt= require('bcryptjs');



module.exports = {
    register: (req, res) => {
        res.render('users/register',{
            categories,
            session: req.session,
            title: "¡Registrate!"
        });
    },
    
    processRegister: (req, res) => {
        let error = validationResult(req);//middleware , le pasa el error del objeto request y me retorna todos los errores //
        if (error.isEmpty()){
            let lastId = 0;

            getUsers.forEach(getUsers => {
                if(getUsers.id > lastId){
                    lastId=getUsers.id
                }
                
            });
            let {
                name,
                lastName,
                email,
                passwordRegister
            } =req.body;

            let newUser = {
                id: lastId +1,
                name,
                lastName,
                email,
                pass: bcrypt.hashSync(passwordRegister, 10),
                avatar: req.file ? req.file.filename :  "default.png",
                rol: "ROL_USER",
                tel: "",
                adress: "",
                pc: "",
                province:"",
                city: "",
            };

            getUsers.push(newUser);

            writeUsersJson(getUsers);

            res.redirect('/users/login')
        } else{
            res.render('register',{
                categories,
                error : errors.mapped(),
                old: req.body
            })
        }
    },
    'login': (req, res) => {        
        res.render('users/login',{
            title: "¡Inicia sesión!"
        });
    },
    'processLogin': (req, res) => {
        
    },
    'logout': (req, res) =>{

    },
    'profile': (req, res) => {        
        res.render('users/profile',{
            title: "¡Tus datos!"
        });
    },
    'edit': (req, res) => {        
        res.render('users/edit',{
            title: "¡Tus datos!"
        });
    },
};