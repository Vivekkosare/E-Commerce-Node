const fs = require('fs');
const path = require('path');
const util = require('../util/path');
const { createDecipher } = require('crypto');
const p = path.join(util, 'data', 'cart.json');

module.exports = class Cart{
    static addProduct(id, productPrice){
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if(!err && fileContent != undefined && fileContent.length > 0){
                cart = JSON.parse(fileContent);
            }
            console.log(cart);
            console.log(JSON.stringify(cart));
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +parseFloat(productPrice);

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }

    static deleteProduct(id, productPrice){
        fs.readFile(p, (err, fileContent) =>{
            if(err){
                return;
            }
            const updatedProduct = {...JSON.parse(fileContent)};
            const product = updatedProduct.products.find(prod => prod.id === id);
            const productQty = product.qty;
            updatedProduct.products = updatedProduct.products.filter(prod => prod.id !== id);
            updatedProduct.totalPrice = updatedProduct.totalPrice - productPrice * productQty;
            fs.writeFile(p, JSON.stringify(updatedProduct), (err) =>{
                console.log(err);
            })
        });
    }

    static getCart(cb){
        fs.readFile(p, (err, fileContent) =>{
            const cart = JSON.parse(fileContent);
            console.log(cart);
            if(err){
                cb(null);
            }
            else{
                cb(cart);
            }
        });
    }
};