FROM node:14.18.0-alpine AS builder

WORKDIR /usr/src/app

COPY package.json tsconfig.json yarn.lock ./

COPY . .

RUN yarn install && yarn build

FROM node:14.18.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --only=production

COPY --from=builder /usr/src/app/dist ./dist

ENV PORT=5555
ENV BITPRECO_WS_API_ENDPOINT=wss://websocket.bitpreco.com

EXPOSE $PORT

CMD ["node", "./dist/server.js"]
