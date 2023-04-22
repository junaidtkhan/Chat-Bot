import React from 'react'
import { getFirestore } from "firebase/firestore"
import {db} from './main.jsx'
import { collection, addDoc } from 'firebase/firestore'

export const new_user = (uid) => {
console.log('working')
    addDoc(collection(db, users, `${uid}`), { chat: [], site_id: "" })
        .then((res) => { if (uid == res.id) { console.log(res.id) } })
}
const FireStore = () => {
}
