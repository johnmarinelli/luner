import { v4 } from 'node-uuid';
import fire from '../firebase';

const db = {
  haikus: []
};

export const fetchHaikus = (filter) => 
  fire
    .database()
    .ref('haikus')
    .orderByKey()
    .limitToLast(20)
    .once('value')
    .then(snapshot => snapshot.val());

export const addHaiku = (text) => {
  const createdAt = Date.now();
  const haiku = { id: v4(), text, createdAt };

  return fire
    .database()
    .ref('haikus')
    .push(haiku)
    .then(__ => haiku);
}
