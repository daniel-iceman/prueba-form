import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvH_ZNBLzQw_vPUbbSb2O2tg28uUgJ2ik",
    authDomain: "prueba-form-18c52.firebaseapp.com",
    databaseURL: "https://prueba-form-18c52.firebaseio.com",
    projectId: "prueba-form-18c52",
    storageBucket: "prueba-form-18c52.appspot.com",
    messagingSenderId: "859908832706",
    appId: "1:859908832706:web:2d83f618a723dfa1072a5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase