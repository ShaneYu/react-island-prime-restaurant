import express from 'express';

import itemCategories from '../data/item-categories';
import constants from '../helpers/constants';

const router = express.Router();

// GET / - gets all item categories
router.get('/', (_, res) => res.json(itemCategories));

// GET /:id - gets single item category
router.get(`/:id(${constants.uuidv4Regex})`, (req, res) => {
  const category = itemCategories.find(
    (category) => category.id === req.params.id
  );

  if (!category) {
    res.sendStatus(404);
    return;
  }

  res.json(category);
});

export default router;
