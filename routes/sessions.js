const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');

//routes go here
router.get('/', sessionsCtrl.index);
router.get('/new', sessionsCtrl.new);
router.post('/', sessionsCtrl.create);
router.get('/:id/edit', sessionsCtrl.edit);
router.get('/:id', sessionsCtrl.show);
router.delete('/:id', sessionsCtrl.delete);
router.put('/:id', sessionsCtrl.update);

module.exports = router; //export the router