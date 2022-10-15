## Executando a aplicação

### 1. Localmente

Após clonar o código do repositório GitHub:

1.1. Executar aplicação:

```bash
cd cotacao-crypto-api
yarn install
yarn start
```

### 2. Docker

Após clonar o código do repositório GitHub:

2.1. Construir a imagem:

```bash
cd cotacao-crypto-api
docker build -t <nome-imagem> .
```
2.2. Executar a imagem gerada:

```bash
docker run -d --rm --name=cotacao-crypto -p 5555:5555 <nome-imagem>
```

- Após iniciar a aplicação. Ela poderá ser testada através do seguinte comando CURL:

```curl
curl localhost:5555/criptomoedas/
curl localhost:5555/criptomoedas/btc
```

2.3. Encerrar container

```bash
docker stop cotacao-crypto
```
