// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGg66nx-cPSmifsTZgZFQFEcrx8828V5A",
  authDomain: "uber-clone-4ec79.firebaseapp.com",
  projectId: "uber-clone-4ec79",
  storageBucket: "uber-clone-4ec79.appspot.com",
  messagingSenderId: "89015353678",
  appId: "1:89015353678:web:e40b8cda5a672c0d30de1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()


export{ app, provider, auth }