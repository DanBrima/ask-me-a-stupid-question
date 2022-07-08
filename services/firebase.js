import firebase from 'firebase/app'
import 'firebase/firestore'

console.log(firebase)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export default firebase.firestore()
