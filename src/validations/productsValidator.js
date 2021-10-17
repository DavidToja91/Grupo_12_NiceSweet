const { check } = require('express-validator');

module.exports = [
    check('nameProduct')
        .notEmpty().withMessage("Este campo es obligatorio").bail()
        .isLength({ min: 4 }).withMessage("El nombre debe tener como mínimo 4 caracteres"),
   
    check('category')
        .notEmpty().withMessage("Debes elegir una categoria"),

    check('subcategoryId')
        .notEmpty().withMessage("Debes elegir una subcategoria"),
    
    check('price')
        .isLength({ min:1 }).withMessage("Este campo es obligatorio"),
    
    check('description')
        .notEmpty().withMessage("Debe completar la descripción del producto")
];