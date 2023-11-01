import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCQipx3nJSi4_GjukNLPiw1rAit0nBN820",
  authDomain: "aura-b9a6a.firebaseapp.com",
  projectId: "aura-b9a6a",
  storageBucket: "aura-b9a6a.appspot.com",
  messagingSenderId: "1072119904055",
  appId: "1:1072119904055:web:db999072b681a592f9ccb2",
  measurementId: "G-MKYN7D22S2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};