import { Router } from 'express';

import { authController } from '../controllers/auth';

const authRoutes = Router();

authRoutes
  .post('/login', authController.login)
  .post('/register', authController.register);

export { authRoutes };
