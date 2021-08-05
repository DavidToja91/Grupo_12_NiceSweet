var express = require('express');
var router = express.Router();
let controllers = require('../controllers/indexController')

router.get('/', controllers.home);
router.get('/contact', controllers.contact);

module.exports = router;