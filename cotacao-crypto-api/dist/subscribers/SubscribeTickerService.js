"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Socket } = require('phoenix-channels');
const { ws_endpoint } = require('../config/index');
const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');
const CreateUpdateCriptomoedaService_1 = __importDefault(require("../services/CreateUpdateCriptomoedaService"));
const CarregarDescricaoCriptomoedas_1 = require("../loaders/CarregarDescricaoCriptomoedas");
class SubscribeTickerService {
    constructor() {
        (0, CarregarDescricaoCriptomoedas_1.CarregarDescricaoCriptomoedas)();
        this.socket = new Socket(`${ws_endpoint}/orderbook/socket`);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const TOPIC_NAME = 'ticker';
            const MARKET = 'ALL-BRL';
            yield this.socket.connect();
            yield this.socket.onOpen(() => {
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
                console.log('Não foi possível se inscrever no canal', `${TOPIC_NAME}:${MARKET}`);
            });
            channel.on('price', (response) => {
                if (response.success == true) {
                    console.log('Evento "price" recebido com sucesso!');
                    for (var market in response) {
                        if (market != 'success') {
                            const { buy, sell } = response[market];
                            const { codigo, nome, descricao } = CarregarDescricaoCriptomoedas_1.descricaoCriptomoedas.get(market);
                            const criptomoeda = new CreateUpdateCriptomoedaService_1.default(criptomoedasRepository).execute({
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
        });
    }
}
exports.default = new SubscribeTickerService();
