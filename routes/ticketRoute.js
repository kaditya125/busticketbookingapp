const express = require('express');
const ticketController = require('./../controllers/ticketController');

const router = express.Router();

// create a ticekt
router
    .route('/')
    .get(ticketController.getAllTickets)

module.exports = router;