var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/sessions');
});

/*router.post('/users', isLoggedIn, usersCtrl.SOMETHING);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}*/

module.exports = router;
