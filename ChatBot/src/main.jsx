import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

//import your own firebase config from firebase website
import { firebaseConfig } from './Login-SignUp_Page/FirebaseConfig'

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export {db}