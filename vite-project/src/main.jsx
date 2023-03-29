import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzDUuEJckLHUgqwg8LPHhI-W6eeqES-SM",
  authDomain: "dobby-chatbot.firebaseapp.com",
  projectId: "dobby-chatbot",
  storageBucket: "dobby-chatbot.appspot.com",
  messagingSenderId: "339891215757",
  appId: "1:339891215757:web:2d4eda2f584dadc8e831c4",
  measurementId: "G-E3X28VWMRK"
};
// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
