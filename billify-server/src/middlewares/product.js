const Product = require('../models/Product');
const ShopKeeper = require('../models/Shopkeeper');
const Store = require('../models/Store');
const { handleError, ClientError } = require('../utils/errorHandler');

module.exports.CreateProduct = async (req, res) => {
    try{
        const {name, price, tag} = req.body;

        if(!name || !price || !tag){
            throw new ClientError('Missing fields');
        }

        let product = await Product.findOne({
            name, price, tag
        })

        if(product){
            return res.json({
                status: true,
                message: 'Product created'
            });
        }

        product = new Product({
            name, price, tag
        });
        
        await product.save();

        return res.json({
            status: true,
            message: 'Product created',
            product
        });
    } catch(e){
        handleError(e, res);
    }
}

module.exports.AddProduct = async (req, res) => {
    try{
        const {productId, quantity} = req.body;

        const product = await Product.findById(productId);
        
        if(!product){
            throw new ClientError('Product not found');
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
    catch(e){
        handleError(e, res);
    }
}