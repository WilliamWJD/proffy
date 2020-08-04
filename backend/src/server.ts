import express from 'express';
import cors from 'cors';
import routes from './routes';

const server = express();

const port = 3333;

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => {
  console.log(`Servidor online na porta: ${port}`);
});
