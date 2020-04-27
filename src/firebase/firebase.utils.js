import firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA4SrkAqRmTO-QoiOEPLQ1vDQrxgUMM7hY',
  authDomain: 'projeto2020pcgs.firebaseapp.com',
  databaseURL: 'https://projeto2020pcgs.firebaseio.com',
  projectId: 'projeto2020pcgs',
  storageBucket: 'projeto2020pcgs.appspot.com',
  messagingSenderId: '34854702073',
  appId: '1:34854702073:web:665b4ab839bdb7f07d8b28',
  measurementId: 'G-NPVD0228ZR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
