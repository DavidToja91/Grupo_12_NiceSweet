const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const User = db.Users;


module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('email')
    .custom((value, {req}) => {
        return User.findOne({
            where: { email: req.body.email }
        })
        .then(user => {
            if(!bcrypt.compareSync(value,user.dataValues.password)) {
                return Promise.reject('Contraseña incorrecta');
            }
        })
        .catch((err) => {
            return Promise.reject("Email o contraseña incorrectos")
        });
    })
];  