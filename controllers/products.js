const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeProduct: true,
        formCSS: true,
        productCSS: true
    });
};

exports.postAddProduct = (req, res, next) => {
    // products.push({
    //     title: req.body.title
    // });
    const product = new Product(req.body.title);
    console.log('save called');
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
   // const products = Product.fetchAll();
   Product.fetchAll(products =>{
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
   });
   
};