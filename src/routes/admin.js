let express = require('express');
let router = express.Router();
let {inicio,
    productos,
    agregarFormulario,
    agregarProducto } = require('../controllers/adminController.js');
let uploadFile = require('../middlewares/uploadFiles');

/* GET: Index para el admin */
router.get('/' , inicio);

/* GET : Muestra la lista con todos los productos */
router.get('/productos' , productos);


/* GET : Muestra cada categoría, ej chocolates, alfajores, etc (parametrizada) :categoria*/
// router.get('/producto/:id' , controllers.producto); /* Sería el detalle del producto */


/* GET: Formulario para agregar productos.*/
router.get('/agregarProducto' , agregarFormulario); /*Agrega un producto nuevo al formulario */
/*POST : Formulario para capturar los datos recibidos */
router.post('/agregarProducto' , uploadFile.single('image'), agregarProducto) /*Envía los datos del formulario */

/*PUT */

/*DELETE */



module.exports = router
// var express = require('express');
// var router = express.Router();
// let controllers = require('../controllers/adminController');

// router.get('/admin', controllers.index);
// router.get('/products', controllers.products);
// router.get('/users', controllers.users);

// module.exports = router;
