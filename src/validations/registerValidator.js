const {check,body} = require('express-validator');
const {getUsers} = require('../data/usersDB');

module.exports =[
    check('name')
    .notEmpty()
    .withMessage("El nombre es requerido"),

    check('lastName')
    .notEmpty()
    .withMessage("El apellido es requerido"),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom(value =>{
        getUsers.forEach(getUsers => {
            if(getUsers.email.includes(value)){
                return false
            }
            
        });

    })
    .withMessage("El Email ya esta registrado"),

    check('passwordRegister')
    .notEmpty()
    .withMessage('Utiliza una clave que recuerdes')
    .isLength({
        min: 6,
        max:15
    })
    .withMessage("Debe tener entre 6 y 15 caracteres"),

    body('passwordRegister2').custom((value,{req})=>
        value !== req.body.passwordRegister? false : true)
    .withMessage("Las contraseñas no coinciden, reintente."),

    check("terms")
    .isString("on")
    .withMessage("Debes aceptar las Bases y Condiciones")

]