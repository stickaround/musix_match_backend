import { Router } from 'express';
import apiCache from 'apiCache';

import { authRoutes } from './auth';
import { artistRoutes } from './artist';
import { albumRoutes } from './album';
import { trackRoutes } from './track';
import { checkAuthentication } from '../middlewares/auth';

const routes = Router();
const cache = apiCache.middleware;

routes.use('/auth', authRoutes);
routes
  .use(cache('20 minutes'))
  .use(checkAuthentication)
  .use('/artists', artistRoutes)
  .use('/albums', albumRoutes)
  .use('/tracks', trackRoutes);

export { routes };
