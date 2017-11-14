const unique = (ary) => {
  let seen = {};
  return ary.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
};

export { 
  unique
};
