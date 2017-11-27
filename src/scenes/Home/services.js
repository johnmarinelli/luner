import fetchDictionaries from './fetch-dictionaries';

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
  spellCheckLines,
  fetchDictionaries
};
