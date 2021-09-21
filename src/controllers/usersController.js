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
               
                phone, 
            } = req.body;

            let newUser = {
                id: lastId +1,
                name,
                lastName,
                email,
                pass: bcrypt.hashSync(pass1, 10),
                avatar: req.file ? req.file.filename : "default.png",
                category: "USER",
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
            title: "¡Inicia sesión!",
            session:req.session
        });
    },
    processLogin: (req, res) => {
        let user = getUsers.find(user=> user.id === req.session.user.id);
            
        res.render('userProfile', {    
            session: req.session,
            user
        });
    },
    profile: (req, res) => {     
        let user = getUsers.find(user=> user.id === req.session.user.id);

        res.render('users/profile',{
            title: "¡Tus datos!",
            session: req.session,
            user
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
            let user = getUsers.find(user => user.id === +req.params.id)
            
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

        } else {
            res.render('edit', {
                errors: errors.mapped(),
                old: req.body,
                session:req.session 
            })   
        }
    },
    logout: (req, res) =>{
        req.session.destroy();
        if(req.cookies.userNiceSweet){
            res.cookie('userNiceSweet','',{maxAge: -1})
        }
        
        return res.redirect('/')
    },
};