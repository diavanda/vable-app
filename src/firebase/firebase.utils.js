import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyASm32tSvSMNQ-xN6kwGmIATxJIF27dqh0',
  authDomain: 'vable-app.firebaseapp.com',
  projectId: 'vable-app',
  storageBucket: 'vable-app.appspot.com',
  messagingSenderId: '713072617694',
  appId: '1:713072617694:web:0e03e6b67970acb675fa4f',
  measurementId: 'G-Z8TFMKYT9D',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
