require('dotenv').config();
const express = require('express');

require('./config/dbConnection');

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})