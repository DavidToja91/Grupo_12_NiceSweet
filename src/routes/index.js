var express = require('express');
var router = express.Router();
let { home, contact, us } = require('../controllers/indexController');

router.get('/', home);
router.get('/contact', contact);
router.get('/us', us);

module.exports = router;