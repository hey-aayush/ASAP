const Product = require('../models/Product');

module.exports.AddProduct = async (req, res) => {
    const {name, quantity, price} = req.body;

    let product = await Product.findOne({
        name, price
    });

    if(!product){
        product = new Product({
            name, price
        });
        await product.save();
    }

    
}