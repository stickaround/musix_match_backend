import { Router } from 'express';

import { authRoutes } from './auth';
import { artistRoutes } from './artist';
import { albumRoutes } from './album';
import { checkAuthentication } from '../middlewares/auth';

const routes = Router();

routes.use('/auth', authRoutes);
routes
  .use(checkAuthentication)
  .use('/artists', artistRoutes)
  .use('/albums', albumRoutes);

export { routes };
