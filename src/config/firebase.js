import firebase from './firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhpLAc9nr_nZhHFjvF6cueN31IO4j7pzc",
  authDomain: "sim-pkn.firebaseapp.com",
  projectId: "sim-pkn",
  storageBucket: "sim-pkn.appspot.com",
  messagingSenderId: "501182557899",
  appId: "1:501182557899:web:044ebc631883b5c0b0f54e",
  measurementId: "G-3DEMQSVWE7"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
  
export default db;