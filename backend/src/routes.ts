import { Router } from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import LoginController from './controllers/LoginController';
import SessionController from './controllers/SessionController';
import ForgotPasswordController from './controllers/ForgotPasswordController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.post('/login', LoginController.store);

routes.post('/session', SessionController.store);

routes.post('/password_forgot', ForgotPasswordController.store);

routes.use(authMiddleware);

routes.post('/classes', ClassesController.store);
routes.get('/classes', ClassesController.index);

routes.post('/connections', ConnectionsController.store);
routes.get('/connections', ConnectionsController.index);

export default routes;
