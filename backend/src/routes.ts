import { Router } from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import LoginController from './controllers/LoginController';

const routes = Router();

routes.post('/login', LoginController.store);

routes.post('/classes', ClassesController.store);
routes.get('/classes', ClassesController.index);

routes.post('/connections', ConnectionsController.store);
routes.get('/connections', ConnectionsController.index);

export default routes;
