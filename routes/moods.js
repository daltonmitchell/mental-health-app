const express = require('express');
const router = express.Router();
const moodsCtrl = require('../controllers/moods');
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, moodsCtrl.new);
router.post('/', isLoggedIn, moodsCtrl.create);
router.get('/:id', isLoggedIn, moodsCtrl.show);
router.post('/:id/reflections', isLoggedIn, moodsCtrl.addReflection);
router.get('/:id/edit', isLoggedIn, moodsCtrl.edit);
router.put('/:id', isLoggedIn, moodsCtrl.update);
router.delete('/:id', isLoggedIn, moodsCtrl.delete);

module.exports = router;