import { v4 } from 'node-uuid';
import fire from '../firebase';

export const fetchHaikus = (filter) => 
  fire
    .database()
    .ref('haikus')
    .orderByKey()
    .limitToLast(20)
    .once('value')
    .then(snapshot => snapshot.val());

export const addHaiku = (haiku) => {
  const createdAt = Date.now();
  const fbHaiku = { id: v4(), ...haiku, createdAt };

  return fire
    .database()
    .ref('haikus')
    .push(fbHaiku)
    .then(__ => fbHaiku);
}

