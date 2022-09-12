import { Router } from 'express';

import { albumController } from '../controllers/album';

const albumRoutes = Router();

albumRoutes.get('/', albumController.getAlbums);

export { albumRoutes };
