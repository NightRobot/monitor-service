const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const order_controller = require('../controllers/order.controller');

router.get('/find/all', order_controller.find_all);
router.get('/find/:id', order_controller.find_by_id);
router.get('/count/:pid', order_controller.count_pid);
module.exports = router;
