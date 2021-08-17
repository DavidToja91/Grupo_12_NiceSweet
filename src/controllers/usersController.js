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
};