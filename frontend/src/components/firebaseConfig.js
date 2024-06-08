// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebaese from 'firebase/compat/app'
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyC7XdFhf_gnGGGquGijVwx6DbsEUdS2pDE",
  authDomain: "zigzag-db898.firebaseapp.com",
  projectId: "zigzag-db898",
  storageBucket: "zigzag-db898.appspot.com",
  messagingSenderId: "418184094490",
  appId: "1:418184094490:web:f5d0bff192bd977deb42a3",
  measurementId: "G-WCR7CV27J6"
};

// Initialize Firebase
const app = firebaese.initializeApp(firebaseConfig);
export default app