let {getUsers, writeUsersJSON } = require('../data/usersDB');
const{validationResult}= require('express-validator');
const bcrypt= require('bcryptjs');

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
                pass1,
                category,
                phone, 
            } = req.body;

            let newUser = {
                id: lastId +1,
                name,
                lastName,
                email,
                rol: "ROL_USER",
                pass: bcrypt.hashSync(pass1, 10),
                avatar: req.file ? req.file.filename : "default.png",
                phone: phone,
            };

            getUsers.push(newUser);

            writeUsersJSON(getUsers);

            res.redirect('/users/login')
        } else{
            res.render('users/register',{
                errors : errors.mapped(),
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
                phone: user.phone,
                avatar: user.avatar,
                category: user.category
            }

            if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                res.cookie('userNiceSweet',req.session.user,{expires: new Date(Date.now() + 900000), httpOnly: true})
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

        res.render('users/edit', {
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

            writeUsersJSON(users);

            delete user.pass;          
            req.session.user = user;
            res.redirect("users/profile");
        }
    },
    logout: (req, res) =>{
        req.session.destroy();
        if(req.cookies.userArtisticaDali){
            res.cookie('userNiceSweet','',{maxAge: -1})
        }
        
        return res.redirect('/')
    },
};