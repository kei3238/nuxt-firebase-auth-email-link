import firebase from 'firebase'
const firebaseConfig = require('../firebase.config.json');

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase