import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrqeiokkxXvsOj2vRaUhhgBPuEmnGUWrA",
  authDomain: "where-is-waldo-76057.firebaseapp.com",
  databaseURL: "https://where-is-waldo-76057-default-rtdb.firebaseio.com",
  projectId: "where-is-waldo-76057",
  storageBucket: "where-is-waldo-76057.appspot.com",
  messagingSenderId: "895325450228",
  appId: "1:895325450228:web:2dc9d932eee3dc011a93a1",
  measurementId: "G-QHN7Q1SV4G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}