import firebase from 'firebase';
import debugEnabled from './debug-enabled';

require('firebase-paginator');

let FirebasePaginator = window.FirebasePaginator;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBJE6swPr3prWw04uTM-sdV_TUAfIlQSHg",
  authDomain: "haikute-1.firebaseapp.com",
  databaseURL: "https://haikute-1.firebaseio.com",
  projectId: "haikute-1",
  storageBucket: "haikute-1.appspot.com",
  messagingSenderId: "672843879123"
};
let fire = firebase.initializeApp(config);
const paginationOpts = {
  pageSize: 3,
  finite: true
};

export let paginator = new FirebasePaginator(firebase.database().ref('haikus'), paginationOpts);

if (debugEnabled) {
  paginator.listen((eventName, payload) => 
    console.log(`Fired ${eventName} with the following payload: `, payload));
}

export default fire;
