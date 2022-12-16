# Cotação Crypto API

## Objetivo

Obter cotações de criptomoedas disponibilizadas por WebSocket API da BitPreço. Armazena informações recebidas em Banco de dados MySQL, atualizando nessa base assim que  receber atualizações do WebSocket.

Além disso, disponibiliza CRUD de criptomoedas através de API Rest. Permite criar, deletar, consultar todas, consultar por código, atualizar todos os dados, atualizar valores de cotação. Aplicação pode ser executada através de [Swagger](localhost:5555/docs).


## 1. Executando a aplicação

### 1.1. Localmente

Após clonar o código do repositório GitHub.
```bash
cd cotacao-crypto-api
```

Configurar o SGBD a ser executado através de arquivo .env. Segue abaixo exemplo de arquivo .env preenchido para usar um SGBD MySQL local (instalado na máquina). Pode ser utilizado o MySQL em container, tal como o arquivo .env.sample no diretório principal do projeto.

```env
NODE_LOCAL_PORT=5555
NODE_DOCKER_PORT=5555

BITPRECO_WS_API_ENDPOINT='wss://websocket.bitpreco.com'

MYSQLDB_HOST=127.0.0.1
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=
MYSQLDB_DATABASE=cotacao_crypto
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306
```

Criar banco de dados "cotacao_crypto" (somente se for utilizado MySQL local):
```bash
mysql -u root < ./create_database.sql
```

Instalar dependências necessárias, realizar build e executar o projeto:
```bash
npm install
npm run dev
```

### 1.2. Utilizar Docker Compose

Após clonar o código do repositório GitHub.
```bash
cd cotacao-crypto-api
```

No diretório principal, renomear o arquivo .env.sample para .env. Executar os serviços:

```bash
docker-compose up
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

Teclar [Ctrl + C] no terminal onde foi executado o comando de iniciar execução. No caso de execução em Docker compose, executar o passo adicional abaixo para remover os serviços:

```bash
docker-compose down
```

