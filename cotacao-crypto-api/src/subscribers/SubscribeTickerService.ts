const { Socket } = require('phoenix-channels');
const { ws_endpoint } = require('../config/index');
const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');
const { descricaoCriptomoedas } = require('../loaders/CarregarDescricaoCriptomoedas');

import CreateUpdateCriptomoedaService from '../services/CreateUpdateCriptomoedaService';

class SubscribeTickerService {
  private socket;

  constructor() {
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

    const channel = this.socket.channel(`${TOPIC_NAME}:${MARKET}`, {});

    channel
      .join()
      .receive('ok', () => {
        console.log('Canal inscrito com sucesso', `${TOPIC_NAME}:${MARKET}`);
      })
      .receive('error', () => {
        console.log(
          'Não foi possível se inscrever no canal',
          `${TOPIC_NAME}:${MARKET}`,
        );
      });

    channel.on('price', (response: any) => {
      if (response.success == true) {
        console.log('Evento "price" recebido com sucesso!');
        for (var market in response) {
          if (market != 'success') {
            const { buy, sell } = response[market];
            const { codigo, nome, descricao } =
              descricaoCriptomoedas.get(market);
            const criptomoeda = new CreateUpdateCriptomoedaService(
              criptomoedasRepository,
            ).execute({
              codigo,
              nome,
              descricao,
              cotacao_venda: buy,
              cotacao_compra: sell,
              variacao: response[market].var,
            });
            console.log(criptomoeda);
          }
        }
      }
    });
  }
}

export default new SubscribeTickerService();
