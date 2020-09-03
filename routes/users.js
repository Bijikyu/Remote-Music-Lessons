var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/sessions');
});

module.exports = router;
