const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    // const products = Product.fetchAll();
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getIndex = (req, res, next) => {
    // const products = Product.fetchAll();
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
};

exports.getCheckOut = (req, res, next) => {
    console.log('checkout');
    res.render('shop/checkout', {
        path: '/checkout',
        title: 'Checkout'
    })
}