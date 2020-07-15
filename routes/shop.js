const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')

// shop/index => GET
router.get('/', shopController.getIndex);

// shop/product-list => GET
router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

// shop/cart => GET
router.get('/cart', shopController.getCart);

// shop/cart => POST
router.post('/cart', shopController.postCart);

// shop/orders => GET
router.get('/orders', shopController.getOrders);

// shop/checkout => GET
router.get('/checkout', shopController.getCheckOut);
module.exports = router;