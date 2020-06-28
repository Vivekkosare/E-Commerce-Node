const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')

// shop/index => GET
router.get('/', shopController.getIndex);

// shop/product-list => GET
router.get('/products', shopController.getProducts);

// shop/cart => GET
router.get('/cart', shopController.getCart);

// shop/checkout => GET
router.get('/checkout', shopController.getCheckOut);
module.exports = router;