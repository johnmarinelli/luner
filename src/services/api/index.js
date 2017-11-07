import { v4 } from 'node-uuid';
import fire from '../firebase';
import { debugEnabled } from './../utilities';

export const fetchHaikus = (filter) => 
  fire
    .database()
    .ref('haikus')
    .orderByKey()
    .limitToLast(20)
    .once('value')
    .then(snapshot => snapshot.val());

/*
export const addHaiku = (haiku) => {
  const createdAt = Date.now();
  const fbHaiku = { id: v4(), ...haiku, createdAt };

  if (debugEnabled) {
    alert('Debug mode enabled - not posting to firebase ^_^b');
    return Promise.resolve();
  }

  return fire
    .database()
    .ref('haikus')
    .push(fbHaiku)
    .then(__ => fbHaiku);
}
*/
