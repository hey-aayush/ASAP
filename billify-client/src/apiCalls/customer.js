module.exports.getCustomers = async () => {
    const res = await fetch(`${API}/shopkeeper/getCustomers`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });

    return res.json();
}

module.exports.getCustomer = async (id) => {
    const res = await fetch(`${API}/shopkeeper/getCustomer?id=${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        }
    });

    return res.json();
}