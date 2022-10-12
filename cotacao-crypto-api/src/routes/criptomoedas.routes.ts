import { response, Router } from 'express';
import CriptomoedasRepository from '../repositories/CriptomoedasRepository';
import CreateCriptomoedaService from '../services/CreateCriptomoedaService';

const criptomoedasRouter = Router();
const criptomoedasRepository = new CriptomoedasRepository();

criptomoedasRouter.get('/', (_, response) => {
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'ADA',
  //   nome: 'ADA',
  //   descricao: 'Token nativo da Blockchain Cardano',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'ABFY',
  //   nome: 'Ambify',
  //   descricao: 'Token que investe em créditos de carbono',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'AXS',
  //   nome: 'Axie Infinity',
  //   descricao: 'Token NFT do game Axie Infinity',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'SLP',
  //   nome: 'Smooth Love Potion',
  //   descricao: 'Token NFT do game Axie Infinity para criar novos Axies',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'BTC',
  //   nome: 'Bitcoin',
  //   descricao: 'Criptomoeda mais popular, maior volume, investimento seguro',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'BNB',
  //   nome: 'Binance Coin',
  //   descricao:
  //     'Criptomoeda da Binance, acessível, segura, confiável e versátil, negocie outros ativos digitais com ela',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'BUSD',
  //   nome: 'BUSD - Lastro em dólar',
  //   descricao:
  //     'Criptomoeda emitida pela Binance e Paxos, pareada com dólar americano, estável, promove exposição ao dólar, fuge volatilidade mercado',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'CRZO',
  //   nome: 'Cruzeiro Token',
  //   descricao:
  //     'Torcedores e investidores recebem retorno financeiro pelas movimentações de jogadores da base do Cruzeiro E.C.',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'ELLO',
  //   nome: 'Token ELLO',
  //   descricao: 'Token NFT para promover grandes artistas musicais brasileiros',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'ETH',
  //   nome: 'Ethereum',
  //   descricao:
  //     'Criptomoeda mais utiliza no mercado descentralizado, bastante segura, estável',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'LUNA',
  //   nome: 'Luna',
  //   descricao:
  //     'Token de Governança da blockchain Terra, permite aos detentores votar e enviar propostas de governança',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'LUNC',
  //   nome: 'Luna Classic (LUNC)',
  //   descricao:
  //     'Token de Governança da blockchain Terra classic (pós Terra), permite aos detentores votar e enviar propostas de governança',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'CAKE',
  //   nome: 'PancakeSwap',
  //   descricao:
  //     'Exchange descentralizada (DEX) baseada em Binance Smart Chain (BSC), possibilita negociar tokens nessa rede',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'PAXG',
  //   nome: 'PAX Gold',
  //   descricao:
  //     'Stablecoin lastreada em ouro, moeda digital e sem burocracia para adquirir ouro, possui reservas auditadas',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'SOL',
  //   nome: 'Solana',
  //   descricao: 'Focada em transações rápidas e contratos inteligentes',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'ATLAS',
  //   nome: 'Star Atlas',
  //   descricao:
  //     'Token NFT, moeda nativa do game Star Atlas, possibilita compra de ativos do jogo',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'POLIS',
  //   nome: 'Star Atlas - Governança',
  //   descricao:
  //     'Token de governança que garante aos seus detentores direito de participar em decisões do game Star Atlas',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'GMT',
  //   nome: "STEP'N - GMT",
  //   descricao:
  //     "Token de governança do aplicativo fitness STEP'N que recompensa usuarios que realizarem atividades ao ar livre",
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'UNI',
  //   nome: 'Uniswap',
  //   descricao:
  //     'Exchange descentralizada (DEX), a maior da rede Ethereum, permite negociar tokens',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'USDC',
  //   nome: 'USD Coin',
  //   descricao:
  //     'Criptomoeda com lastro em dólar emitida pela blockchain Ethereum',
  // });
  // new CreateCriptomoedaService(criptomoedasRepository).execute({
  //   codigo: 'USDT',
  //   nome: 'Tether',
  //   descricao:
  //     'Criptomoeda com lastro em dólar funciona dentro do Bitcoin, serve como substituto do dólar em várias exchanges',
  // });
  return response.json(criptomoedasRepository.all());
});

criptomoedasRouter.post('/', (request, response) => {
  const { codigo, nome, descricao } = request.body;
  const criptomoeda = new CreateCriptomoedaService(criptomoedasRepository).execute({
    codigo,
    nome,
    descricao
  });
  return response.json(criptomoeda);
});

export default criptomoedasRouter;


