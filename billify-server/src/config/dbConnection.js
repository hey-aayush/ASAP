const mongoose = require('mongoose')

const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log("Mongoose Is Connected");
    })
    .catch(err => console.log(err));