var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

router.get('/', usersCtrl.index);
router.get('/:id/edit', usersCtrl.edit);
router.get('/:id', usersCtrl.show);
router.put('/:id', usersCtrl.update);


module.exports = router;
