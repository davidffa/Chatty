import { Router } from 'express';

import SettingsController from './controllers/SettingsController';
import UsersController from './controllers/UsersController';

const settingsController = new SettingsController();
const usersController = new UsersController();

const routes = Router();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);

export default routes;