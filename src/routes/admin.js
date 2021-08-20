let express = require('express');
let router = express.Router();
let {inicio,
    productos,
    agregarFormulario,
    agregarProducto,
    editarFormulario,
    editarProducto, 
    eliminarProducto} = require('../controllers/adminController.js');
// let uploadFile = require('../middlewares/uploadFiles');

/* GET: Index para el admin */
router.get('/' , inicio);

/* GET : Muestra la lista con todos los productos */
router.get('/products' , productos);


/* GET : Muestra cada categoría, ej chocolates, alfajores, etc (parametrizada) :categoria*/
// router.get('/producto/:id' , controllers.producto); /* Sería el detalle del producto */


/* GET: Formulario para agregar productos.*/
router.get('/agregarProducto/' , agregarFormulario); /*Agrega un producto nuevo al formulario */
/*POST : Formulario para capturar los datos recibidos */
router.post('/agregarProducto' , agregarProducto); /*Envía los datos del formulario */
// uploadFile.single('image')

/* GET: formulario de edición de productos */
router.get('/editarProducto/:id' , editarFormulario);
/* PUT : recibe los datos de edición */ 
router.put('/editarProducto/:id' , editarProducto);

/* DELETE: Elimina un producto */
router.delete('eliminarProducto/:id', eliminarProducto);



module.exports = router
