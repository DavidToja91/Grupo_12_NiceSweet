let express = require('express');
let router = express.Router();
let { list, detail, cart, create, edit } = require('../controllers/productsController')

router.get('/list', list);
router.get('/detail', detail);
router.get('/cart', cart);
router.get('/create', create);
router.get('/edit/:id', edit);

module.exports = router;