const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('lastName')
    .notEmpty()
    .withMessage('El apellido es requerido'),

    check('phone')
    .notEmpty()
    .withMessage('El telefono es requerido')
]