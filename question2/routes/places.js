const express = require('express');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const router = express.Router();

const jsonDbPath = path.join(__dirname, '/../data/places.json');

const tabDestinations = [
    {
      id: 1,
      name: 'Berlin',
      description : 'Soooo coool',
    },
    {
      id: 2,
      name: 'Bruges',
      description : 'The Venice of the north',
    },
    {
      id: 3,
      name: 'Munich',
      description : 'too expensive',
    },
    {
      id: 4,
      name: 'Paris',
      description : 'we will always have Paris',
    },
    {
      id: 5,
      name: 'Rome',
      description : 'majestic',
    }
];

// Add a destination to the list
router.post('/', (req, res) => {
    const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
    const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;
  
    if (!name || !description) return res.sendStatus(400); // error code '400 Bad request'
  
    const destinations = parse(jsonDbPath, tabDestinations);
    const lastItemIndex = destinations?.length !== 0 ? destinations.length - 1 : undefined;
    const lastId = lastItemIndex ? destinations[lastItemIndex]?.id : undefined;
    const nextId = lastItemIndex !== 0 ? lastId + 1 : 1;
  
    const newPlace = {
      id: nextId,
      name,
      description,
    };
  
    destinations.push(newPlace);
  
    serialize(jsonDbPath, destinations);
  
    return res.json(newPlace.id);
  });

module.exports = router;