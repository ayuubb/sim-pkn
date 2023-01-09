import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBhpLAc9nr_nZhHFjvF6cueN31IO4j7pzc",
  authDomain: "sim-pkn.firebaseapp.com",
  projectId: "sim-pkn",
  storageBucket: "sim-pkn.appspot.com",
  messagingSenderId: "501182557899",
  appId: "1:501182557899:web:044ebc631883b5c0b0f54e",
  measurementId: "G-3DEMQSVWE7"
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
const db = getFirestore(app)
export {db}
