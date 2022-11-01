import { app } from './app';
import SubscribeTickerService from './subscribers/SubscribeTickerService';

const { port } = require('./config/index');

app.listen(port, () => {
  console.log('Servidor iniciado na porta ', port)
});

setTimeout(() => {
  SubscribeTickerService.execute();
}, 1000);
