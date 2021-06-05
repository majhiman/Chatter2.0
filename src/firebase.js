import firebase from 'firebase/app';
import 'firebase/auth';

export const auth =firebase.initializeApp({
  apiKey: "AIzaSyC0otilYsGdevUPet-hWjbNcH3_n5RcI40",
  authDomain: "chatter-97f4c.firebaseapp.com",
  databaseURL: "https://chatter-97f4c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatter-97f4c",
  storageBucket: "chatter-97f4c.appspot.com",
  messagingSenderId: "329070023026",
  appId: "1:329070023026:web:efd6e909c5ef213fbc8deb",
  measurementId: "G-9GQZHBMBT3"
}).auth();