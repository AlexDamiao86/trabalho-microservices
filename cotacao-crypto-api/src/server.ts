import express, { Request, NextFunction, Response, urlencoded } from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';
import { RegisterRoutes } from '../public/routes';
import SubscribeTickerService from './subscribers/SubscribeTickerService';
import { AppError } from './errors/AppError';

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

app.use(
  urlencoded({
    extended: true,
  })
);


app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.status).json({
      message: err.message
    })
  }
  return response.status(500).json({
    message: `Erro interno do servidor ${err.message}`
  });
}

);

RegisterRoutes(app);

app.listen(port, () => {
  console.log('Servidor iniciado na porta ', port)
});

setTimeout(() => {
  SubscribeTickerService.execute();
}, 1000);
