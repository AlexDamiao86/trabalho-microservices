# Cotação Crypto API

## Objetivo

Obter cotações de criptomoedas disponibilizadas por WebSocket API da BitPreço. Armazena informações recebidas em Banco de dados MySQL, atualizando nessa base assim que  receber atualizações do WebSocket.

Além disso, disponibiliza CRUD de criptomoedas através de API Rest. Permite criar, deletar, consultar todas, consultar por código, atualizar todos os dados, atualizar valores de cotação. Aplicação pode ser executada através de [Swagger](localhost:5555/docs).


## 1. Executando a aplicação

### 1.1. Localmente

Após clonar o código do repositório GitHub:


```bash
$ cd cotacao-crypto-api
$ npm install
$ npm run build
$ npm run dev
```

### 1.2. Utilizar Docker Compose

Após clonar o código do repositório GitHub:

```bash
$ cd cotacao-crypto-api
$ docker-compose up
```

## 2. Testar aplicação

Podemos testar a aplicação a partir das seguintes alternativas:

### 2.1. CURL

```curl
curl localhost:5555/criptomoedas/
curl localhost:5555/criptomoedas/btc
```

### 2.2. Swagger
Acessar endereço:
```bash
localhost:5555/docs/
```

### 2.3. Encerrar serviços

Teclar [Ctrl + C] no terminal onde foi executado o comando de iniciar execução. Para remover os serviços, executar o seguinte comando:

```bash
docker-compose down
```

