import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBfuHSWOJd592bWjwKx6xQnTv1yiWd5Ec8",
  authDomain: "nextfire-7ecad.firebaseapp.com",
  projectId: "nextfire-7ecad",
  storageBucket: "nextfire-7ecad.appspot.com",
  messagingSenderId: "527543794523",
  appId: "1:527543794523:web:4f3a46c55fc85b9b71b87e",
  measurementId: "G-1LMKDF32W0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();