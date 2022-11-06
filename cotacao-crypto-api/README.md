## Executando a aplicação

### 1. Localmente

Após clonar o código do repositório GitHub:

1.1. Executar aplicação:

```bash
cd cotacao-crypto-api
npm install
npm run build
npm run dev
```

### 2. Docker

Após clonar o código do repositório GitHub:

2.1. Construir a imagem:

\<nome-imagem> = Exemplo: cotacao-crypto-api

```bash
cd cotacao-crypto-api
docker build -t <nome-imagem> .
```
2.2. Executar a imagem gerada:

\<nome-imagem> = o mesmo nome de imagem informado no comando anterior.
\<porta-local> = Exemplo: 5555, 3333, 9000, etc.

```bash
docker run -d --rm --name=cotacao-crypto -p <porta-local>:5555 <nome-imagem>
```

- Após iniciar a aplicação. Podemos testá-la com as seguintes alternativas:

\<porta-local> = a mesma porta do computador informada no comando acima.

#### CURL

```curl
curl localhost:<porta-local>/criptomoedas/
curl localhost:<porta-local>/criptomoedas/btc
```

#### Swagger
Acessar endereço:
```bash
localhost:<porta-local>/docs/
```

2.3. Encerrar container

```bash
docker stop cotacao-crypto
```
