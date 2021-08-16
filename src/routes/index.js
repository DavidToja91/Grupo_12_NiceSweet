var express = require('express');
var router = express.Router();
let { home, contact } = require('../controllers/indexController')

router.get('/', home);
router.get('/contact', contact);

module.exports = router;