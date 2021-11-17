let express = require('express');
let router = express.Router();
let {inicio,
    productos,
    apiProduct,
    apiCategories,
    agregarFormulario,
    agregarProducto,
    editarFormulario,
    editarProducto, eliminarProducto,
    productDestac,
    Destac,
    deleteDestac,
    checkDeleteProduct,
    checkDeleteUser,
    users, formUser, addUser, editUser, proccessUser, deleteUser} = require('../controllers/adminController.js');
let uploadFile = require('../middlewares/uploadFiles')
let userAdminCheck = require('../middlewares/userAdminCheck')
let productsValidator = require('../validations/productsValidator')
let registerValidator = require('../validations/registerValidator');
let editProfileValidator = require('../validations/editProfileValidator');
const userSession = require('../middlewares/userSession')

/* GET: Index para el admin */
router.get('/', userSession, userAdminCheck, inicio);

/* GET : Muestra la lista con todos los productos */
router.get('/products', userSession, userAdminCheck, productos);
router.get('/api', userSession, userAdminCheck, apiProduct)
router.get('/api/2', userSession, userAdminCheck, apiCategories)

/* GET: Create Product*/
router.get('/agregarProducto/',userSession, userAdminCheck, agregarFormulario); /*Agrega un producto nuevo al formulario */
router.post('/agregarProducto', uploadFile.array('image'), productsValidator, agregarProducto); /*Envía los datos del formulario */



/* GET: formulario de edición de productos */
router.get('/editarProducto/:id', userSession, userAdminCheck, editarFormulario);
router.put('/editarProducto/:id', uploadFile.array('image'), productsValidator, editarProducto);

router.get('/eliminarProducto/:id', userSession, userAdminCheck, checkDeleteProduct)
router.delete('/eliminarProducto/:id', userSession ,  userAdminCheck, eliminarProducto);

router.get('/destacarProducto', userSession, userAdminCheck, productDestac)
router.put('/destarcar/:id', userSession, userAdminCheck, Destac)
router.put('/deleteDestacar/:id', userSession, userAdminCheck, deleteDestac)

/* GET : Muestra la lista con todos los usuarios */
router.get('/users' , userSession, userAdminCheck, users);

/*POST : Formulario para capturar los datos recibidos */
router.get('/addUser', formUser);
router.post('/addUser' , uploadFile.single('image'), registerValidator, addUser); /*Envía los datos del formulario */
// uploadFile.single('image')

/* GET: formulario de edición de usuario */
router.get('/editUser/:id', userSession, userAdminCheck, editUser);
/* PUT : recibe los datos de edición */ 
router.put('/editUser/:id', uploadFile.single('image'), editProfileValidator, proccessUser);

/* DELETE: Elimina un producto */
router.get('/eliminarUser/:id', checkDeleteUser)
router.delete('/deleteUser/:id', deleteUser);


module.exports = router
