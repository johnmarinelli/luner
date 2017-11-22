const now = () => new Date().getTime();
const twentyFourHoursAgo = () => new Date(now() - (24 * 60 * 60 * 1000));

const millisecondsToHours = (t1) => Math.floor(t1 / 3600000);

const getHoursDiff = (t1, t2) => 
  Math.abs(millisecondsToHours(t2) - millisecondsToHours(t1));

const unique = (ary) => {
  let seen = {};
  return ary.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
};

export {
  now,
  twentyFourHoursAgo,
  unique,
  getHoursDiff
};
