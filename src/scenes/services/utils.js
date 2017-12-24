const parseUrlOptionsString = (string, delim) =>
  string.split(delim).reduce((acc, kv) => {
    const [key, value] = kv.split('=');
    acc[key] = value;
    return acc;
  }, {});
const parseQueryString = queryString => parseUrlOptionsString(queryString, '?');
const parseFragmentString = fragmentString =>
  parseUrlOptionsString(fragmentString, '#');

export { parseQueryString, parseFragmentString };
