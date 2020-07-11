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

exports.getProduct = (req, res, next) =>{
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, product =>{
      //  console.log(product);
      res.render('shop/product-detail', {
          product: product,
          pageTitle: product.title,
          path:'/products'
        });
    });
    //res.redirect('/');
}

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

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    })
};

exports.getCheckOut = (req, res, next) => {
    console.log('checkout');
    res.render('shop/checkout', {
        path: '/checkout',
        title: 'Checkout'
    })
}