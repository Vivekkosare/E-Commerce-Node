const fs = require('fs');
const path = require('path');
const util = require('../util/path');
const { createDecipher } = require('crypto');
const p = path.join(util, 'data', 'cart.json');

module.exports = class Cart{
    static addProduct(id, productPrice){
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            console.log('fileContent: ', fileContent);
            // const fileData = JSON.parse(fileContent);
            if(!err && fileContent != undefined){
                cart = JSON.parse(fileContent);
            }

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
            console.log('value: ', parseFloat(productPrice));
            cart.totalPrice = cart.totalPrice + +parseFloat(productPrice);

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
};