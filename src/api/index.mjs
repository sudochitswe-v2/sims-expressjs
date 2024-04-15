import { Router } from 'express';
import routesV1 from './v1/index.mjs';
import routesV2 from './v2/index.mjs';

const router = Router();

router.use('/v1', routesV1);
router.use('/v2', routesV2);
export default router;

