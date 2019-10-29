const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

router.get('/find/all', product_controller.find_all);
router.get('/find/:id', product_controller.find_by_id);
module.exports = router;
