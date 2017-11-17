const now = () => new Date().getTime();
const twentyFourHoursAgo = () => new Date(now() - (24 * 60 * 60 * 1000));

export {
  now,
  twentyFourHoursAgo
};
