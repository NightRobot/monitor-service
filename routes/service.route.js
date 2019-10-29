const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const service_controller = require('../controllers/service.controller');

router.get('/ticket', service_controller.ticket);
router.get('/order', service_controller.order);
router.get('/product', service_controller.product);
module.exports = router;
