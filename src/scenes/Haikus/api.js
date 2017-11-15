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
    alert('Debug mode enabled - not posting to firebase ^_^b');
    return Promise.resolve();
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
