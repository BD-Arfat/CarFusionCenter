// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI2jMsv5Ko3Yfwd_eGsqbcOZJMShEuhH4",
  authDomain: "car-shops-3.firebaseapp.com",
  projectId: "car-shops-3",
  storageBucket: "car-shops-3.appspot.com",
  messagingSenderId: "737035225341",
  appId: "1:737035225341:web:26e0dd52182c0dba705694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;