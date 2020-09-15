import express from 'express';

import items from '../data/items';
import popularItems from '../data/popular-items';
import constants from '../helpers/constants';

const router = express.Router();

// GET / - gets all items (can be filtered by categoryId on query string)
router.get('/', (req, res) => {
  if (req.query.categoryId) {
    res.json(items.filter((item) => item.categoryId === req.query.categoryId));
    return;
  }

  res.json(items);
});

// GET /popular - gets the top 4 most popular items
router.get('/popular', (_, res) => res.json(popularItems));

// GET /:id - gets single item (404 if not found)
router.get(`/:id(${constants.uuidv4Regex})`, (req, res) => {
  const foundItem = items.find((item) => item.id === req.params.id);

  if (!foundItem) {
    res.sendStatus(404);
    return;
  }

  res.json(foundItem);
});

export default router;
