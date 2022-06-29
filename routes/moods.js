const express = require('express');
const router = express.Router();
const moodsCtrl = require('../controllers/moods');

router.get('/new', moodsCtrl.new);
router.post('/', moodsCtrl.create);
router.get('/:id', moodsCtrl.show);
router.post('/:id/reflections', moodsCtrl.addReflection);

module.exports = router;