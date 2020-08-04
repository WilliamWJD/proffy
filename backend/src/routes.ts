import { Router } from 'express';

import ClassesController from './controllers/ClassesController';

const routes = Router();

routes.post('/classes', ClassesController.store);

export default routes;
