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
                message: 'Product created', 
                product
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

module.exports.EditProduct = async (req, res) => {
    try{
        const {productId, updates} = req.body;

        if(!productId || !updates){
            throw new ClientError('Missing fields');
        }

        const product = await Product.findById(productId);

        for (const [key, value] of Object.entries(updates)){
            product[key] = value;
        }

        await product.save();

        return res.json({
            status: true, 
            message: 'Product updated',
            product
        });
    } catch(e){
        return handleError(e, res);
    }
}

module.exports.GetProducts = async (req, res) => {
    try{
        const user = req.user;
        console.log(user);
        const shopkeeper = await ShopKeeper.findById(user.userTypeId);
        if(!shopkeeper){
            throw new ClientError('No shopkeeper available');
        }

        const products = await Store.find({
            storeId : shopkeeper.storeId
        });

        const productsObj = [];
        for(let i = 0; i < products.length; i++){
            const currentProduct = await Product.findById(products[i].productId);
            productsObj.push({
                product: currentProduct, 
                quantity: products[i].quantity
            });
        }

        console.log(productsObj);

        return res.json({
            status: true,
            products : productsObj
        });
    } 
    catch (e){
        handleError(e, res);
    }
}

module.exports.GetProduct = async (req, res) => {
    try{
        const user = req.user;
        const { id } = req.query;

        const shopkeeper = await ShopKeeper.findById(user.userTypeId);
        if(!shopkeeper){
            throw new ClientError('No shopkeeper available');
        }

        const product = await Store.find({
            storeId: shopkeeper.storeId,
            produtId: id
        });

        if(!product){
            throw new ClientError('Product unavailable');
        }

        return res.json({
            status: true,
            product
        });
    } 
    catch (e){
        handleError(e, res);
    }
}