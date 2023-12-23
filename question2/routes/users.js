const express = require('express');
const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const router = express.Router();

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const tabUsers = [{
  id : 1,
  name : 'Mona',
  mail : 'mona@gmail.com',
  favourites : []
}];

// Add a user to the list
router.post('/', (req, res) => {
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;

  if (!name || !mail) return res.sendStatus(400); // error code '400 Bad request'

  for(i = 0; i < tabUsers.length; i++){
    if(tabUsers[i].mail == mail){
      return res.sendStatus(403); //error  code '403 Forbidden'
    }
  }

  const users = parse(jsonDbPath, tabUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  const lastId = lastItemIndex ? users[lastItemIndex]?.id : undefined;
  const nextId = lastItemIndex !== 0 ? lastId + 1 : 1;

  const newUser = {
    id: nextId,
    name,
    mail,
    favourites : []
  };

  users.push(newUser);

  serialize(jsonDbPath, users);

  return res.json(newUser.id);
});

// Add a destination into the favourites
router.post('/fav', (req, res) => {
  const idUser = req?.body?.idUser?.length !== 0 ? req.body.idUser : undefined;
  const idPlace = req?.body?.idPlace?.length !== 0 ? req.body.idPlace : undefined;

  if (!idUser || !idPlace) return res.sendStatus(400); // error code '400 Bad request'

  for(i = 0; i < tabUsers[idUser - 1].favourites.length; i++){
    if(tabUsers[idUser - 1].favourites[i] == idPlace){
      return res.sendStatus(403); //error  code '403 Forbidden'
    }
  }
  
  const users = parse(jsonDbPath, tabUsers);
  
  users[idUser - 1].favourites.push(idPlace - 1);

  serialize(jsonDbPath, users);
});

module.exports = router;
