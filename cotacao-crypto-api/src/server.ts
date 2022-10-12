import express from 'express';
import routes from './routes';
const { port } = require('./config/index');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('Server has started on port ', port)
});
