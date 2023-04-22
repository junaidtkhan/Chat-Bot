import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


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
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { app, auth }
