import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzDUuEJckLHUgqwg8LPHhI-W6eeqES-SM",
  authDomain: "dobby-chatbot.firebaseapp.com",
  databaseURL: "https://dobby-chatbot-default-rtdb.firebaseio.com",
  projectId: "dobby-chatbot",
  storageBucket: "dobby-chatbot.appspot.com",
  messagingSenderId: "339891215757",
  appId: "1:339891215757:web:2d4eda2f584dadc8e831c4",
  measurementId: "G-E3X28VWMRK"

};
// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export {db}