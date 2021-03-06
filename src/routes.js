// import { Router } from 'express';

// import cors from 'cors';

// import swaggerUi from 'swagger-ui-express';

// import swaggerDocument from './app/docs/swagger.json';

// import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';

// import authMiddleware from './app/middlewares/auth';

const { Router } = require('express');

const cors = require('cors');

const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./app/docs/swagger.json');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.use(cors());

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// export default routes;
module.exports = routes;
