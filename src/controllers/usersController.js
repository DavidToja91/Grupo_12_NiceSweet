module.exports = {
    'register': (req, res) => {
        res.render('users/register',{
            title: "¡Registrate!"
        });
    },
    'login': (req, res) => {        
        res.render('users/login',{
            title: "¡Inicia sesión!"
        });
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