import fire from './firebase';
import debugEnabled from './debug-enabled';
import configureStore from './configure-store';

/*
const compareArrays = (a, b) => 
  a.length === b.length &&
    a.every((v, i) => v === b[i]);
*/

/*
const validateSyllables = (lines, expectedCounts) => {
  const actualCounts = lines.map(line => line.syllables);
  return compareArrays(actualCounts, expectedCounts)
};
*/

export { fire, debugEnabled, configureStore /*, compareArrays , validateSyllables*/ };
