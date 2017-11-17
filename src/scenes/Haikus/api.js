import { debugEnabled, fire } from '../../services/';

/*
 * returns a Firebase promise that returns a snapshot
 */
const findHaiku = (id) => 
  fire.database().ref('haikus').orderByChild('id').equalTo(id).once('child_added');

/*
 * @params:
 *  snapshot: Firebase snapshot
 *  newProps: Properties to update Firebase with
 *
 * @returns:
 *  Firebase.ref.update Promise 
 *  that contains the id and the new properties of the haiku
 */
const updateHaiku = (snapshot, newProps) => {
  if (debugEnabled) {
    /*
     * return a mock object that simulates an XHR request
     */
    alert('Debug mode enabled - not posting to firebase ^_^b');
    
    if (Math.random() < 0.75) {
      return Promise.resolve({id: 1, upvotes: 1});
    } 
    else {
      throw '(Dev) Haiku failed to send.';
    }
  }

  return snapshot
    .ref
    .update(newProps)
    .then(_ => ({
      id: snapshot.val().id, 
      ...newProps
    }));
};

export {
  findHaiku,
  updateHaiku
};
