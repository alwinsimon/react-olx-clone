import firebase  from "firebase";
import 'firebase/auth';
import 'firebase/firebase';


const firebaseConfig = {

  apiKey: "AIzaSyALbVuprt6UX4fFDStsovOnOzNbggkHImM",
  authDomain: "olx-clone-ba71c.firebaseapp.com",
  projectId: "olx-clone-ba71c",
  storageBucket: "olx-clone-ba71c.appspot.com",
  messagingSenderId: "363632890900",
  appId: "1:363632890900:web:d51709c0ceb1bf83130301",
  measurementId: "G-2WP2FG99YY"
  
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;