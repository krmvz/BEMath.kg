// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFireStore}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEWsnAQ5xie_ZLfG6EhSsLA8iig0ESvNk",
  authDomain: "duofl-589d1.firebaseapp.com",
  projectId: "duofl-589d1",
  storageBucket: "duofl-589d1.appspot.com",
  messagingSenderId: "447632322720",
  appId: "1:447632322720:web:c273d71d8c3d8c046dd9c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export default {auth};

const db = getFireStore();