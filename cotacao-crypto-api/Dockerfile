FROM registry.access.redhat.com/ubi8/nodejs-16:latest AS builder

USER 0

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./

COPY . .

RUN npm install && npm run build

FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY --from=builder /usr/src/app/build ./build

EXPOSE 5555

CMD ["node", "./build/src/server.js"]
