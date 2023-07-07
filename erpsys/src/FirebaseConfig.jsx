// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8-dBX8u7D-3y8XkywuMYZc_Soz5q4nWE",
  authDomain: "erpsystem-a1383.firebaseapp.com",
  databaseURL: "https://erpsystem-a1383-default-rtdb.firebaseio.com",
  projectId: "erpsystem-a1383",
  storageBucket: "erpsystem-a1383.appspot.com",
  messagingSenderId: "40125131382",
  appId: "1:40125131382:web:3d94228e9677b824e30d57",
  measurementId: "G-Q697SJTEHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);