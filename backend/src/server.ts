import express from 'express';
import routes from './routes';

const server = express();

const port = 3333;

server.use(routes);
server.use(express.json());

server.listen(port, () => {
  console.log(`Servidor online na porta: ${port}`);
});
