import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDb2aBlDd9pGJi84n2ighxj771kdQu46fc",
    authDomain: "firegram-3de1b.firebaseapp.com",
    databaseURL: "https://firegram-3de1b.firebaseio.com",
    projectId: "firegram-3de1b",
    storageBucket: "firegram-3de1b.appspot.com",
    messagingSenderId: "863364493476",
    appId: "1:863364493476:web:881e7769d1f60ff1b8f631"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};