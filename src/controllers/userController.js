/* let { getUsers, writeUsersJson } = require('../data/usersDB');
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
                category: user.category
            }

            if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                res.cookie('logged', req.session.user,{maxAge:1000*60*2})
            }

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
}; */

const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const User = require('../../models/User');

const controller = {
	register: (req, res) => {
		return res.render('userRegisterForm');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('userRegisterForm', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('userRegisterForm', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);

		return res.redirect('/user/login');
	},
	login: (req, res) => {
		return res.render('userLoginForm');
	},
	processLogin: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/user/profile');
			} 
			return res.render('userLoginForm', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('userLoginForm', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
	profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;