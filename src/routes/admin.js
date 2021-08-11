var express = require('express');
var router = express.Router();
let controllers = require('../controllers/adminController');

router.get('/admin', controllers.index);
router.get('/products', controllers.products);
router.get('/users', controllers.users);

module.exports = router;