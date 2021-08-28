import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCgzJnY8_OqrxhzF0u4ccOhQkoMnVrzFEs",
    authDomain: "mypetsdemo-d2edb.firebaseapp.com",
    projectId: "mypetsdemo-d2edb",
    storageBucket: "mypetsdemo-d2edb.appspot.com",
    messagingSenderId: "1034293276010",
    appId: "1:1034293276010:web:e04d4dbac81150868e8913"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;

  export const auth = firebase.auth();