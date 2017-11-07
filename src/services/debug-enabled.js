const debugEnabled = undefined !== process ? 'development' === process.env.NODE_ENV : false;

export default debugEnabled;
