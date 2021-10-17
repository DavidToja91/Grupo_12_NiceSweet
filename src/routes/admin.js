let express = require('express');
let router = express.Router();
let {inicio,
    productos,
    api,
    agregarFormulario,
    agregarProducto,
    editarFormulario,
    editarProducto, eliminarProducto,
    users, addUser, editUser, deleteUser} = require('../controllers/adminController.js');
let uploadFile = require('../middlewares/uploadFiles')
let productsValidator = require('../validations/productsValidator')

/* GET: Index para el admin */
router.get('/' , inicio);

/* GET : Muestra la lista con todos los productos */
router.get('/products' , productos);
router.get('/api', api)


/* GET: Create Product*/
router.get('/agregarProducto/', agregarFormulario); /*Agrega un producto nuevo al formulario */
router.post('/agregarProducto', uploadFile.array('image'), productsValidator, agregarProducto); /*Envía los datos del formulario */



/* GET: formulario de edición de productos */
router.get('/editarProducto/:id' , editarFormulario);
router.put('/editarProducto/:id', uploadFile.array('image'), productsValidator, editarProducto);

router.delete('/eliminarProducto/:id', eliminarProducto);

/* GET : Muestra la lista con todos los usuarios */
router.get('/users' , users);

/*POST : Formulario para capturar los datos recibidos */
router.post('/addUser' , uploadFile.single('image'), addUser); /*Envía los datos del formulario */
// uploadFile.single('image')

/* GET: formulario de edición de usuario */
router.get('/editUser/:id' , editUser);
/* PUT : recibe los datos de edición */ 
router.put('/editUser/:id', uploadFile.single('image'), editarProducto);

/* DELETE: Elimina un producto */
router.delete('/deleteUser/:id', deleteUser);


module.exports = router
