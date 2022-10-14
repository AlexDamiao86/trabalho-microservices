"use strict";
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    ws_endpoint: process.env.BITPRECO_WS_API_ENDPOINT
};
