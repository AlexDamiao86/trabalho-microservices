"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarregarDescricaoCriptomoedas = exports.descricaoCriptomoedas = void 0;
exports.descricaoCriptomoedas = new Map();
function CarregarDescricaoCriptomoedas() {
    exports.descricaoCriptomoedas.set('ADA-BRL', {
        codigo: "ADA",
        nome: "ADA",
        descricao: "Token nativo da Blockchain Cardano"
    });
    exports.descricaoCriptomoedas.set('ABFY-BRL', {
        codigo: "ABFY",
        nome: "Ambify",
        descricao: "Token que investe em créditos de carbono"
    });
    exports.descricaoCriptomoedas.set('AXS-BRL', {
        codigo: "AXS",
        nome: "Axie Infinity",
        descricao: "Token NFT do game Axie Infinity"
    });
    exports.descricaoCriptomoedas.set('SLP-BRL', {
        codigo: "SLP",
        nome: "Smooth Love Potion",
        descricao: "Token NFT do game Axie Infinity para criar novos Axies"
    }),
        exports.descricaoCriptomoedas.set('BTC-BRL', {
            codigo: "BTC",
            nome: "Bitcoin",
            descricao: "Criptomoeda mais popular, maior volume, investimento seguro"
        }),
        exports.descricaoCriptomoedas.set('BNB-BRL', {
            codigo: "BNB",
            nome: "Binance Coin",
            descricao: "Criptomoeda da Binance, acessível, segura, confiável e versátil, negocie outros ativos digitais com ela"
        }),
        exports.descricaoCriptomoedas.set('BUSD-BRL', {
            codigo: "BUSD",
            nome: "BUSD - Lastro em dólar",
            descricao: "Criptomoeda emitida pela Binance e Paxos, pareada com dólar americano, estável, promove exposição ao dólar, fuge volatilidade mercado"
        }),
        exports.descricaoCriptomoedas.set('CRZO-BRL', {
            codigo: "CRZO",
            nome: "Cruzeiro Token",
            descricao: "Torcedores e investidores recebem retorno financeiro pelas movimentações de jogadores da base do Cruzeiro E.C."
        }),
        exports.descricaoCriptomoedas.set('ELLO-BRL', {
            codigo: "ELLO",
            nome: "Token ELLO",
            descricao: "Token NFT para promover grandes artistas musicais brasileiros"
        }),
        exports.descricaoCriptomoedas.set('ETH-BRL', {
            codigo: "ETH",
            nome: "Ethereum",
            descricao: "Criptomoeda mais utiliza no mercado descentralizado, bastante segura, estável"
        }),
        exports.descricaoCriptomoedas.set('LUNA-BRL', {
            codigo: "LUNA",
            nome: "Luna",
            descricao: "Token de Governança da blockchain Terra, permite aos detentores votar e enviar propostas de governança"
        }),
        exports.descricaoCriptomoedas.set('LUNC-BRL', {
            codigo: "LUNC",
            nome: "Luna Classic (LUNC)",
            descricao: "Token de Governança da blockchain Terra classic (pós Terra), permite aos detentores votar e enviar propostas de governança"
        }),
        exports.descricaoCriptomoedas.set('CAKE-BRL', {
            codigo: "CAKE",
            nome: "PancakeSwap",
            descricao: "Exchange descentralizada (DEX) baseada em Binance Smart Chain (BSC), possibilita negociar tokens nessa rede"
        }),
        exports.descricaoCriptomoedas.set('PAXG-BRL', {
            codigo: "PAXG",
            nome: "PAX Gold",
            descricao: "Stablecoin lastreada em ouro, moeda digital e sem burocracia para adquirir ouro, possui reservas auditadas"
        }),
        exports.descricaoCriptomoedas.set('SOL-BRL', {
            codigo: "SOL",
            nome: "Solana",
            descricao: "Focada em transações rápidas e contratos inteligentes"
        }),
        exports.descricaoCriptomoedas.set('ATLAS-BRL', {
            codigo: "ATLAS",
            nome: "Star Atlas",
            descricao: "Token NFT, moeda nativa do game Star Atlas, possibilita compra de ativos do jogo"
        }),
        exports.descricaoCriptomoedas.set('POLIS-BRL', {
            codigo: "POLIS",
            nome: "Star Atlas - Governança",
            descricao: "Token de governança que garante aos seus detentores direito de participar em decisões do game Star Atlas"
        }),
        exports.descricaoCriptomoedas.set('GMT-BRL', {
            codigo: "GMT",
            nome: "STEP'N - GMT",
            descricao: "Token de governança do aplicativo fitness STEP'N que recompensa usuarios que realizarem atividades ao ar livre"
        }),
        exports.descricaoCriptomoedas.set('UNI-BRL', {
            codigo: "UNI",
            nome: "Uniswap",
            descricao: "Exchange descentralizada (DEX), a maior da rede Ethereum, permite negociar tokens"
        }),
        exports.descricaoCriptomoedas.set('USDC-BRL', {
            codigo: "USDC",
            nome: "USD Coin",
            descricao: "Criptomoeda com lastro em dólar emitida pela blockchain Ethereum"
        }),
        exports.descricaoCriptomoedas.set('USDT-BRL', {
            codigo: "USDT",
            nome: "Tether",
            descricao: "Criptomoeda com lastro em dólar funciona dentro do Bitcoin, serve como substituto do dólar em várias exchanges"
        });
}
exports.CarregarDescricaoCriptomoedas = CarregarDescricaoCriptomoedas;
