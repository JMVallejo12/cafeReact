import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import dotenv from 'dotenv';
import {BrowserRouter} from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "cafereact-feb80.firebaseapp.com",
  projectId: "cafereact-feb80",
  storageBucket: "cafereact-feb80.appspot.com",
  messagingSenderId: "493272923344",
  appId: import.meta.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
