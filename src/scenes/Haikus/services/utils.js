import { now, millisecondsToHours, getHoursDiff } from '../../../services/utils';

/*
 * https://medium.com/hacking-and-gonzo/how-hacker-news-ranking-algorithm-works-1d9b0cf2c08d
 * low gravity to offset high age
 *
 * 1 upvote offsets ~ 5 hours of age difference at gravity = 1.8
 */
const gravity = 1.01;
const calculateScore = (ups, ageHours) => 
  ups / Math.pow((ageHours + 2), gravity);

const getAgeHours = (createdAtEpoch) => 
  getHoursDiff(createdAtEpoch, now());

const comparator = (s1, s2) => {
  if (s2 < s1) return -1;
  else if (s1 < s2) return 1;
  else return 0;
};

const rankHaikus = (h1, h2) => {
  const h1Age = getAgeHours(h1.createdAt);
  const h2Age = getAgeHours(h2.createdAt);

  const h1Score = calculateScore(h1.upvotes || 0, h1Age);
  const h2Score = calculateScore(h2.upvotes || 0, h2Age);
  
  return comparator(h1Score, h2Score);
};

export {
  calculateScore,
  getAgeHours,
  comparator,
  rankHaikus
};
