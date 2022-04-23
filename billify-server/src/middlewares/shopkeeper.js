const ShopKeeper = require('../models/Shopkeeper');
const Customer = require('../models/Customer');
const { handleError, ClientError } = require('../utils/errorHandler');

module.exports.GetCustomer = async (req, res) => {
    try{
        const user = req.user;
        const { id } = req.query;
        console.log(user);

        const shopkeeper = await ShopKeeper.findById(user.userTypeId);
        const data = await Customer.findById(id);
        console.log(data)
        
        let newData = {};
        let newBills = [];
        newData.name = data.name;
        newData.email = data.email;
        newData.address = data.address;
        for (let i = 0; i < data.bills.length; i++) {
            const bill = data.bills[i];
            if(bill.shopId == shopkeeper.storeId) {
                newBills.push(bill);
            }
        }
        newData.bills=newBills;
        return res.json(newData);
    }
    catch(e){
        handleError(e, res);
    }
}

module.exports.GetCustomers = async (req, res) => {
    try{
        const user = req.user;
        console.log(user);
        const shopkeeper = await ShopKeeper.findById(user.userTypeId);
        let customerList = []
        for (let index = 0; index < shopkeeper.customerIdList.length; index++) {
            const id = shopkeeper.customerIdList[index];
            const data = await Customer.findById(id);
            console.log(data)
            let newData = {};
            newData.id = data._id;
            newData.name = data.name;
            newData.email = data.email;
            customerList.push(newData);
        }
        return res.json(customerList);
    }
    catch(e){
        handleError(e, res);
    }
}