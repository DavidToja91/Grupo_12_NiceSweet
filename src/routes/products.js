let express = require('express');
let router = express.Router();
let controllers = require('../controllers/productsController')

router.get('/list', controllers.list);
router.get('/detail/:id', controllers.detail);
router.get('/cart', controllers.cart);
router.get('/create', controllers.create);
router.get('/edit/:id', controllers.edit);

module.exports = router;