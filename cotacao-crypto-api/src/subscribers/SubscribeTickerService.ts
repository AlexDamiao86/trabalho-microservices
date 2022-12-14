const { Socket } = require('phoenix-channels');
const { ws_endpoint } = require('../config/index');
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
            // Verifica se cripto teve tratamento de descricao
            // Se não houve tratamento, inclui no Map de descrição
            if (!descricaoCriptomoedas.has(market)) {
              let codigoModificado = market.replace("-BRL", "");
              descricaoCriptomoedas.set(market, {
                codigo: codigoModificado,
                nome: codigoModificado,
                descricao: codigoModificado
              });
            }
            const { codigo, nome, descricao } = descricaoCriptomoedas.get(market);
            const { buy, sell } = response[market];
            const variacao = response[market].var;
            new CreateUpdateCriptomoedaService().execute({
              codigo,
              nome,
              descricao,
              cotacao_venda: buy,
              cotacao_compra: sell,
              variacao
            });
          }
        }
      }
    });
  }
}

export default new SubscribeTickerService();
