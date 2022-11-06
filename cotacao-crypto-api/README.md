## Executando a aplicação

### 1. Localmente

Após clonar o código do repositório GitHub:

#### 1.1. Executar aplicação

```bash
cd cotacao-crypto-api
npm install
npm run build
npm run dev
```

### 2. Gerar imagem localmente (Docker)

Após clonar o código do repositório GitHub:

#### 2.1. Construir a imagem

\<nome-imagem> = Exemplo: cotacao-crypto-api

```bash
cd cotacao-crypto-api
docker build -t <nome-imagem> .
```
#### 2.2. Executar a imagem gerada

\<nome-imagem> = o mesmo nome de imagem informado no comando anterior.

```bash
docker run -d --rm --name=cotacao-crypto -p 5555:5555 <nome-imagem>
```

#### 2.3. Testar aplicação

Podemos testar a aplicação a partir das seguintes alternativas:

##### CURL

```curl
curl localhost:5555/criptomoedas/
curl localhost:5555/criptomoedas/btc
```

##### Swagger
Acessar endereço:
```bash
localhost:5555/docs/
```

#### 2.4. Encerrar container

```bash
docker stop cotacao-crypto
```

### 3. Executar a partir de imagem do repositório (DockerHub)

#### 3.1. Executar container a partir de imagem no DockerHub:

```bash
docker run -d --rm --name=cotacao-crypto -p 5555:5555 docker.io/alexdamiao86/cotacao-crypto-api
```
#### 3.2. Testar aplicação

Idem 2.3

#### 3.3. Encerrar container

Idem 2.4
