import {
  Router
} from 'express';

import SessionController from './controllers/SessionController';
import UserController from './controllers/userController';


import authMiddleware from './middlewares/auth';
import userController from './controllers/userController';

const routes = new Router();

// routes.get('/', (req, res) => {
//   return res.status(201).json('api On');
// });

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
// routes.get('/findOne/:id', UserController.findByName);
routes.post('/bid', UserController.bid);
routes.get('/getAllBid/:id', userController.findBid)
routes.get('/allBids', userController.getAllBids)

routes.get('/find', UserController.find);
routes.use(authMiddleware);


routes.put('/usersUpdate', UserController.update);



module.exports = routes;
