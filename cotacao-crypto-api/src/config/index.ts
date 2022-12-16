const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.NODE_DOCKER_PORT || 5555,
  ws_endpoint: process.env.BITPRECO_WS_API_ENDPOINT || 'wss://websocket.bitpreco.com',
  db_host: process.env.MYSQLDB_HOST,
  db_user: process.env.MYSQLDB_USER,
  db_password: process.env.MYSQLDB_ROOT_PASSWORD,
  db_name: process.env.MYSQLDB_DATABASE,
  db_port: process.env.MYSQLDB_DOCKER_PORT
};
