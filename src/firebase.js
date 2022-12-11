import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBhpLAc9nr_nZhHFjvF6cueN31IO4j7pzc",
  authDomain: "sim-pkn.firebaseapp.com",
  projectId: "sim-pkn",
  storageBucket: "sim-pkn.appspot.com",
  messagingSenderId: "501182557899",
  appId: "1:501182557899:web:044ebc631883b5c0b0f54e",
  measurementId: "G-3DEMQSVWE7"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db,app}

const messaging = getMessaging(app);
getToken(messaging, { vapidKey : 'BJAWxCJ0D73pqDy1HoI_jWUqLttAODVC-z0Anj1kkGXB61h1pl8peweojUEznkujYVBxdfIRGrYkwI_PrJ9-t7M'}).then((currentToken) => {
  if (currentToken){
    console.log('-----------------------------------------------','currentToken');
  }else{
    console.log('error');
  }
})

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    }
  });
}


requestPermission()