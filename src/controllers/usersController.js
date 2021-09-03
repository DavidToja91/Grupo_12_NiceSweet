let { getUsers, writeUsersJson } = require('../data/usersDB');
const{validationResult}= require('express-validator');

module.exports = {
    'register': (req, res) => {
        res.render('users/register',{
            title: "¡Registrate!"
        });
    },
    'processRegister': (req, res) => {
        let error = validationResult(req);//middleware , le pasa el error del objeto request y me retorna todos los errores //
        if (error.isEmpty()){
            let lastId = 1;

            getUsers.forEach(getUsers => {
                if(getUsers.id > lastId){
                    lastId=getUsers.id
                }
                
            });




        }
    },
    'login': (req, res) => {        
        res.render('users/login',{
            title: "¡Inicia sesión!"
        });
    },
    'processLogin': (req, res) => {
        let errors = validationResult(req)
            
        if(errors.isEmpty()){

            let user = users.find(user => user.email === req.body.email)

            req.session.user = { 
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            /* if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                res.cookie('userArtisticaDali',req.session.user,{maxAge:1000*60*2})
            } */

            res.locals.user = req.session.user; //Creo la variable user en la propiedad locals dentro del objeto request y como valor le asigno los datos del usuario en sesión
        
            res.redirect('/');
        }
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