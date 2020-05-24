import express from 'express';

import pingPongRoute from './ping-pong';

const router = express.Router();

router.use('/', pingPongRoute);

export default router;
