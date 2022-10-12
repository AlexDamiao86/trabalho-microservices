const { Socket } = require('phoenix-channels');
const { endpoint } = require('../config/index');

const socket = new Socket(`${endpoint}/orderbook/socket`);
const TOPIC_NAME = 'ticker';
const MARKET = 'ALL-BRL';

socket.connect();

socket.onOpen(() => {
  console.log('Conectado com sucesso em ', endpoint);
});

socket.onError(() => {
  console.log('Falha de conexão com o websocket em ', endpoint);
});

const channel = socket.channel(`${TOPIC_NAME}:${MARKET}`, {});
channel.join()
  .receive('ok', () => {
      console.log('Canal inscrito com sucesso ', `${TOPIC_NAME}:${MARKET}`);
    })
  .receive('error', () => {
    console.log('Não foi possível se inscrever no canal ', `${TOPIC_NAME}:${MARKET}`);
  });

channel.on('price', (response: any) => {
  console.log('Evento `"price"` recebido: ', response);
});
