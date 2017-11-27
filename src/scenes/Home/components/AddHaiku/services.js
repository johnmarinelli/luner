import { v4 } from 'node-uuid';
import { debugEnabled, fire } from '../../../../services/';

const compareArrays = (a, b) => 
  a.length === b.length &&
    a.every((v, i) => v === b[i]);

const validateSyllables = (lines, expectedCounts) => {
  const actualCounts = lines.map(line => line.syllables);
  return compareArrays(actualCounts, expectedCounts)
};

const addHaiku = (haiku) => {
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
    .then(_ => fbHaiku);
};

export {
  compareArrays,
  validateSyllables,
  addHaiku
};
