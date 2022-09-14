import { Router } from 'express';

import { authController } from '../controllers/auth';
import { checkAuthentication } from '../middlewares/auth';

const authRoutes = Router();

authRoutes
  .post('/login', authController.login)
  .post('/register', authController.register)
  .get('/current_user', checkAuthentication, authController.getCurrentUser);

export { authRoutes };
