let { getUsers, writeUsersJson } = require('../data/usersDB');

module.exports = {
    'register': (req, res) => {
        res.render('users/register',{
            title: "¡Registrate!"
        });
    },
    'processRegister': (req, res) => {
        
    },
    'login': (req, res) => {        
        res.render('users/login',{
            title: "¡Inicia sesión!"
        });
    },
    'processLogin': (req, res) => {
        
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