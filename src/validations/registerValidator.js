const {check,body} = require('express-validator');
const { getUsers } = require('../data/usersDB');

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

    check('phone')
    .notEmpty()
    .withMessage("El número telefónico es requerido").bail()
    .isNumeric()
    .withMessage('Solo números, por favor'),

    body('email').custom(value => {
        let user = getUsers.filter(user=>{ 
            return user.email == value 
        })
        
        if(user == false){ 
            return true 
        }else{
            return false 
        }
    })

    .withMessage("El Email ya esta registrado"),

    check('pass1')
    .notEmpty()
    .withMessage('Utiliza una clave que recuerdes')
    .isLength({
        min: 6,
        max:15
    })
    .withMessage("Debe tener entre 6 y 15 caracteres"),

    body('pass2').custom((value,{req}) =>
        value !== req.body.pass1? false : true)
    .withMessage("Las contraseñas no coinciden, reintente."),

    check("terms")
    .isString("on")
    .withMessage("Debes aceptar las Bases y Condiciones")

]