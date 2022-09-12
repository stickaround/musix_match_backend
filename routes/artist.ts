import { Router } from 'express';

import { artistController } from '../controllers/artist';

const artistRoutes = Router();

artistRoutes.get('/', artistController.getChartingArtists);

export { artistRoutes };
