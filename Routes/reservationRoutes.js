

const express = require('express');
const router = express.Router();
const reservationControllers = require('../Controllers/reservationControllers');

router.get('/print-tables/:restaurantId', reservationControllers.printTablesData);

module.exports = router;
