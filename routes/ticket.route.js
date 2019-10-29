const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const ticket_controller = require('../controllers/ticket.controller');

router.get('/find/all', ticket_controller.find_all);
router.get('/count', ticket_controller.count);
router.get('/isused', ticket_controller.is_used);
module.exports = router;
