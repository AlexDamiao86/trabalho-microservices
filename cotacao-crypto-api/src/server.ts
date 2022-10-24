import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import SubscribeTickerService from './subscribers/SubscribeTickerService';

const { port } = require('./config/index');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(routes);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.listen(port, () => {
  console.log('Server has started on port ', port)
});

setTimeout(() => {
  SubscribeTickerService.execute();
}, 1000);
