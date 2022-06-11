const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList);

module.exports = router;