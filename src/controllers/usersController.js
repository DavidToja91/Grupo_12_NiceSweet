let {getUsers, writeUsersJson } = require('../data/usersDB');
const{validationResult}= require('express-validator');
const bscrypt= require('bcryptjs');

module.exports = {
    register: (req, res) => {
        res.render('users/register',{
            session: req.session,
            title: "¡Registrate!"
        });
    },
    
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let lastId = 0;
        
            getUsers.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let {
                name,
                lastName,
                email,
                pass1
            } =req.body;

            let newUser = {
                id: lastId +1,
                name,
                lastName,
                email,
                pass: bcrypt.hashSync(pass1, 10),
                avatar: req.file ? req.file.filename :  "default.png",
                rol: "ROL_USER",
                phone: ""
            };

            getUsers.push(newUser);

            writeUsersJson(getUsers);

            res.redirect('/')
        } else{
            res.render('/users/register',{
                error : errors.mapped(),
                old: req.body
        })
    }
    },

    login: (req, res) => {        
        res.render('users/login', {
            title: "¡Inicia sesión!"
        });
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)
            
        if(errors.isEmpty()){

            let user = getUsers.find(user => user.email === req.body.email);

            req.session.user = { 
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                category: user.category
            }

            if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                res.cookie('logged', req.session.user,{expires: new Date(Date.now() + 900000), httpOnly: true})
            }

            res.locals.user = req.session.user; //Creo la variable user en la propiedad locals dentro del objeto request y como valor le asigno los datos del usuario en sesión
            res.redirect('/')
                     
        } else{
            res.render('login', {
                errors: errors.mapped(), 
                session:req.session 
            })
        }  
    },
    profile: (req, res) => {        
        res.render('users/profile',{
            title: "¡Tus datos!"
        });
    },
    editProfile: (req, res) => {
        let user = getUsers.find(user => user.id === +req.params.id)

        res.render('userProfileEdit', {
            user,
            session: req.session
        })
    },
    updateProfile: (req, res) => {        
        let errors = validationResult(req)
            
        if(errors.isEmpty()){
            let user = users.find(user => user.id === +req.params.id)
            
            let { 
                name, 
                last_name,
                phone,
            } = req.body;

            user.id = user.id
            user.name = name
            user.last_name = last_name
            user.phone = phone
            user.avatar = req.file ? req.file.filename : user.avatar

            writeUsersJson(users);

            delete user.pass          
            req.session.user = user
            res.redirect("/users/profile");
        }
    },
    logout: (req, res) =>{
        req.session.destroy();
        if(req.cookies.userArtisticaDali){
            res.cookie('userArtisticaDali','',{maxAge:-1})
        }
        
        return res.redirect('/')
    },
};