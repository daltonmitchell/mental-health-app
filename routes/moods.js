const express = require('express');
const router = express.Router();
const moodsCtrl = require('../controllers/moods');

router.get('/new', moodsCtrl.new);
router.post('/', moodsCtrl.create);

module.exports = router;