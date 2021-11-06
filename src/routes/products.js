let express = require('express');
let router = express.Router();
let { index, detail, cart, search, edit, add } = require('../controllers/productsController')

router.get('/', index);
router.get('/detail/:id', detail);
router.get('/cart', cart);
router.get('/search', search)


/* router.get('/create', add); 
router.post('/create', create);

router.get('/edit/:id', edit);
router.put('/edit/:id', edit); */

module.exports = router;