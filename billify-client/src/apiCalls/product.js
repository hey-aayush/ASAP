const { API } = require('../config/backend');

module.exports.createProduct = async (name, price, tag) => {
    const res = await fetch(`${API}/product/createProduct`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, price, tag
        })
    });

    return res.json();
}

module.exports.addProduct = async (productId, quantity) => {
    const res = await fetch(`${API}/product/addProduct`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productId, quantity
        })
    });

    return res.json();
}

module.exports.editProduct = async (productId, updates) => {
    const res = await fetch(`${API}/product/editProduct`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productId, updates
        })
    });

    return res.json();
}

module.exports.getProducts = async () => {
    const res = await fetch(`${API}/product/getProducts`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });

    return res.json();
}

module.exports.getProduct = async (id) => {
    const res = await fetch(`${API}/product/getProduct?id=${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });

    return res.json();
}