var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
router.get('/', controller.travelList);

module.exports = router;
