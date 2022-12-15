const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.NODE_DOCKER_PORT || 5555,
  ws_endpoint: process.env.BITPRECO_WS_API_ENDPOINT || 'wss://websocket.bitpreco.com',
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  db_port: process.env.DB_PORT
};
