var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

router.get('/', usersCtrl.index);
router.get('/toggle', usersCtrl.toggle);
router.put('/:id', usersCtrl.update);
router.get('/:id', usersCtrl.show);

module.exports = router;
