import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

/// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDuq7UXnAkz52pZjedsffX4S8IKvT0fM7w',
    authDomain: 'firegram-5f93b.firebaseapp.com',
    projectId: 'firegram-5f93b',
    storageBucket: 'firegram-5f93b.appspot.com',
    messagingSenderId: '920676761797',
    appId: '1:920676761797:web:3e2b1503446758547170ac',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }