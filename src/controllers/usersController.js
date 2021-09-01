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