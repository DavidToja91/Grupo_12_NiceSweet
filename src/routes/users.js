var express = require('express');
var router = express.Router();
/* let { registro, login } = require('../controlllers/usersController'); */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* router.get('/register', registro);
router.get('/login', login); */

module.exports = router;