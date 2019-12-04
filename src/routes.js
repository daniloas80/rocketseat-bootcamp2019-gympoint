import { Router } from 'express';

import StudentsController from './app/controllers/StudentsController';
import SessionController from './app/controllers/SessionController';
import PlansController from './app/controllers/PlansController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('hello world');
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/students', StudentsController.store);
routes.put('/students/:id', StudentsController.update);

routes.get('/plans', PlansController.index);
routes.post('/plans', PlansController.store);
routes.put('/plans/:id', PlansController.update);
routes.delete('/plans/:id', PlansController.delete);

export default routes;
