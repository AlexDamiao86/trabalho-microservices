"use strict";
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    bitPreco: {
        endpoint: process.env.BITPRECO_WS_API_ENDPOINT
    }
};
