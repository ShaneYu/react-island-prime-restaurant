import express from 'express';

import categoriesRoute from './item-categories';
import itemsRoute from './items';
import pingPongRoute from './ping-pong';

const router = express.Router();

router.use('/', pingPongRoute);
router.use('/items', itemsRoute);
router.use('/item-categories', categoriesRoute);

export default router;
