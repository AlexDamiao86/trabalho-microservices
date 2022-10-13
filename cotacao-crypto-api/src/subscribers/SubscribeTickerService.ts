const { Socket } = require('phoenix-channels');
const { ws_endpoint } = require('../config/index');

class SubscribeTickerService {
  private socket;

  constructor() {
    console.log('endpoint', ws_endpoint);
    this.socket = new Socket(`${ws_endpoint}/orderbook/socket`);
  }

  public async execute() {
    const TOPIC_NAME = 'ticker';
    const MARKET = 'ALL-BRL';
    await this.socket.connect();

    await this.socket.onOpen(() => {
      console.log('Conectado com sucesso em', ws_endpoint);
    });

    this.socket.onError(() => {
      console.log('Falha de conexão com o websocket em', ws_endpoint);
    });

    const channel = this.socket.channel(`${TOPIC_NAME}:${MARKET}`,{});

    channel
      .join()
      .receive('ok', () => {
        console.log('Canal inscrito com sucesso',`${TOPIC_NAME}:${MARKET}`);
      })
      .receive('error', () => {
        console.log(
          'Não foi possível se inscrever no canal',`${TOPIC_NAME}:${MARKET}`,
        );
      });

    channel
      .on('price', (response: any) => {
        console.log('Evento "price" recebido:', response);
    });
  }
}

export default new SubscribeTickerService();


