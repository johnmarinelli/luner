import { v4 } from 'node-uuid';

const db = {
  haikus: []
};

const delay = (duration) => 
  new Promise((res, rej) => 
    setTimeout(() => 
      res(), 
      duration));

export const addHaiku = (text) => 
  delay(500)
    .then(() => {
      const haiku = {
        id: v4(),
        text
      };

      db.haikus.push(haiku);
      return haiku;
    })
