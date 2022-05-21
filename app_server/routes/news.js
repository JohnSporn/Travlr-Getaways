var express = require('express');
var router = express.Router();
const controller = require('../controllers/news');

/* GET News page. */
router.get('/', controller.news);

module.exports = router;
