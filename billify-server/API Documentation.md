# API Documentation

## Auth Routes

- **Shopkeeper Register:-** POST  -> /register/shopkeeper
    > Request Body:- {email, password, shopName, name}
    > Response Body:- {message, status = true, shopkeeper} if successful, (error, status = false) if failed.

- **Customer Register:-** POST -> /register/customer
    > Request Body:- {email, password, name}
    > Response Body:- {message, status = true, customer} if successful, (error, status = false) if failed.

- **Shopkeeper Login** POST -> /login/shopkeeper
    > Request Body:- {email, password}
    > Response Body:- {message, status = true, shopkeeper} if successful, (error, status = false) if failed.

- **Customer Login** POST -> /login/customer
    > Request Body:- {email, password}
    > Response Body:- {message, status = true, customer} if successful, (error, status = false) if failed.

## Product Routes

- **Create Product:-** POST -> /product/createProduct
    > Request Body:- {name, price, tag}
    > Response Body:- {message, status = true, productId} if successful, (error, status = false) if failed.

- **Add Product:-** POST -> /product/addProduct
    > Request Body:- {productId, quantity}
    > Response Body:- {message, status = true, product} if successful, (error, status = false) if failed 

- **Edit Product:-** PUT -> /product/editProduct
    > Request Body:- {productId, updates}
    > Response Body:- {message, status = true, product} if successful, (error, status = false) if failed 

- **Get Products:-** POST -> /product/getProducts
    > Response Body:- {message, status = true, products} if successful, (error, status = false) if failed 

- **Get Product:-** POST -> /product/getProduct?id=
    > Response Body:- {message, status = true, product} if successful, (error, status = false) if failed 


