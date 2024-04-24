import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LpNsKTB_7Tof8xbEX06htWittUJ2Fac",
  authDomain: "cafereact-feb80.firebaseapp.com",
  projectId: "cafereact-feb80",
  storageBucket: "cafereact-feb80.appspot.com",
  messagingSenderId: "493272923344",
  appId: "1:493272923344:web:3edf0dda0157ee4b7532d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
