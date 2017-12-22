import firebase from 'firebase';
import debugEnabled from './debug-enabled';
import prodConfig from './firebase-config';

require('firebase-paginator');

let FirebasePaginator = window.FirebasePaginator;
let config;

// Initialize Firebase
if ('test' === process.env.NODE_ENV) {
  config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  };
} else {
  config = prodConfig;
}

let fire = firebase.initializeApp(config);
const firebaseEventListeners = {};
const attachFirebaseListener = (event, cb) => {
  if ('test' !== process.env.NODE_ENV) {
    const handle = fire
      .database()
      .ref('haikus')
      .on(event, cb);
    firebaseEventListeners[event] = handle;
    return handle;
  } else return null;
};

const detachFirebaseListener = event => {
  if ('test' !== process.env.NODE_ENV) {
    return fire
      .database()
      .ref('haikus')
      .off(event, firebaseEventListeners[event]);
  } else return null;
};

const paginationOpts = {
  pageSize: 10,
  finite: true
};

let paginator;

if ('test' === process.env.NODE_ENV) {
  /*
   * mock paginator for testing
   */
  paginator = {
    reset: jest.fn(),
    goToPage: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  };
} else {
  paginator = new FirebasePaginator(
    firebase.database().ref('haikus'),
    paginationOpts
  );
}

if (debugEnabled) {
  paginator.listen((eventName, payload) =>
    console.log(`Fired ${eventName} with the following payload: `, payload)
  );
}

export { paginator, attachFirebaseListener, detachFirebaseListener };
export default fire;
