const express = require('express');
const router = express.Router();
const assignmentsCtrl = require('../controllers/assignments');

router.get('/', assignmentsCtrl.index);
router.get('/new', assignmentsCtrl.new);
router.post('/', assignmentsCtrl.create);
router.get('/:id/edit', assignmentsCtrl.edit);
router.get('/:id', assignmentsCtrl.show);
router.delete('/:id', assignmentsCtrl.delete);
router.put('/:id', assignmentsCtrl.update);

module.exports = router; //export the router
