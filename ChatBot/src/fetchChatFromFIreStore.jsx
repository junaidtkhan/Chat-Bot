import React from 'react'
import { arrayUnion, collection, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from './main'
import { getAuth } from 'firebase/auth'

export const fetchChatFromFIreStore = () => {
    const auth = getAuth()

    const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid))
    console.log(auth.currentUser.uid)
    // fetch all docs
    
    getDocs(q).then((res) => {
    res.forEach((document) => {
        const docRef = doc(db, 'users', document.id)
        getDoc(docRef).then((res) => {
            const chat = res.data().chat
            return chat
        }).catch((err) => { err.message })
    })
    }).catch((err) => { console.log(err.message) })
}
