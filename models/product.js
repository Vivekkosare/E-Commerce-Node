//const products = [];
const fs = require('fs');
const path = require('path');
const util = require('../util/path');
const p = path.join(util,'data','products.json');

const getProductsFromFile = (cb) =>{
    fs.readFile(p,(err, fileContent) => {
        if(err){
          return cb([]);
        }
        else{
            return cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
    //    const p = path.join(util,'data','products.json');;
    getProductsFromFile(products =>{
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err)=>{
            console.log(err);
        });
        
    });
    }

    static fetchAll(cb){        
        getProductsFromFile(cb);
    }
}