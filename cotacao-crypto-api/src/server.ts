import express, { Response, Request, urlencoded, NextFunction } from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';
import { RegisterRoutes } from '../build/routes';
import SubscribeTickerService from './subscribers/SubscribeTickerService';
import { ValidateError } from 'tsoa';

const { port } = require('./config/index');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(routes);
app.use("/docs", swaggerUi.serve,
  async (_req: Request, res: Response) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    )
  }
);

app.use(
  urlencoded({
    extended: true,
  })
);

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: Response) {
  res.status(404).send({
    mensagem: "Página não encontrada",
  });
});

app.use(function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  if (err instanceof ValidateError) {
    console.warn(`Erro de validação para ${req.path}:`, err.fields);
    return res.status(422).json({
      mensagem: "Erro de validação",
      detalhes: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      mensagem: "Erro interno no servidor. Verifique se requisição está correta.",
    });
  }
  next();
});

app.listen(port, () => {
  console.log('Servidor iniciado na porta ', port)
});

setTimeout(() => {
  SubscribeTickerService.execute();
}, 1000);
