import { Router } from 'express';

import { trackController } from '../controllers/track';

const trackRoutes = Router();

trackRoutes.get('/', trackController.getTracks);

export { trackRoutes };
