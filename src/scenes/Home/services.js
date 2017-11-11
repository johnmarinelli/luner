import { schema } from 'normalizr';

/*
 * normalizr schema
 */
const haiku = new schema.Entity('haikus');
const arrayOfHaikus = new schema.Array(haiku);

/*
 * input validation
 */

/*
 * spellcheck
 * allow for three mispellings
 * because the typo library will throw false negatives
 */
const spellCheckLines = (typo, lineContents) => {
  let valid = true;
  if (typo) {
    const validate = (text) => 
      text
        .split(' ')
        .reduce((acc, word) => 
          acc + (typo.check(word) ? 0 : 1), 0);

    valid = lineContents.reduce((acc, line) => 
      acc + validate(line), 0) <= 3;
  }

  return valid;
}

export {
  haiku,
  arrayOfHaikus,
  spellCheckLines
};
