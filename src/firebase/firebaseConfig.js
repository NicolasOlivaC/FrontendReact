import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';


  const firebaseConfig = {
    apiKey: "AIzaSyBFbNAr1K_GpPxEx8UgChtst_TdojLtdG0",
    authDomain: "pruebareactdb.firebaseapp.com",
    databaseURL: "https://pruebareactdb-default-rtdb.firebaseio.com",
    projectId: "pruebareactdb",
    storageBucket: "pruebareactdb.appspot.com",
    messagingSenderId: "946144550728",
    appId: "1:946144550728:web:386f620037359f08e29d7d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  

  export {
      db,
      googleAuthProvider,
      firebase
  }