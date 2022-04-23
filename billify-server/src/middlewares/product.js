const Product = require('../models/Product');
const ShopKeeper = require('../models/Shopkeeper');
const Store = require('../models/Store');

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

    const user = req.user;
    const shopkeeper = await ShopKeeper.findById(user.userTypeId);
    const storeId = shopkeeper.storeId;

    await Store.create({
        storeId, 
        productId: product._id,
        quantity
    });

    return res.json({
        status: true,
        message: 'Product added successfully'
    });
}