import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ChatBox from './ChatBox';
import AuthPage from './Login-SignUp_Page/AuthPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, CollectionReference } from 'firebase/firestore';
import { db } from './main';
import { fetchChatFromFIreStore } from './fetchChatFromFIreStore';
export const ChatModal = (props) => {
    const [loggedIn, setLoggedIn] = useState(null)
    // const [chat, setChat] = useState([])
    const auth = getAuth();
    useEffect(() => {

        //To check if user logged in or not
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                console.log("user logged in")
                const uid = user.uid;
                // ...
            } else {
                setLoggedIn(false)
                // alert("user Logged OUT")
                // User is signed out
                // ...
            }
        });

    }, [])
    //to sign-out current user
    const handleSignout = (event) => {
        event.preventDefault()
        auth.signOut()

    }
    // const handleAddDoc = (event) => {
    //     // const auth=getAuth()
    //     event.preventDefault()
    //     console.log('Before addDoc')
    //     addDoc(collection(db, 'users'), { "chat": [], "site_id": "" }, `${uid}`).then((res) => { console.log(res.id) }).catch((err) => { console.log(err.message) })
    //     console.log('after addDoc')
    // }
    const handleChatHistory = () => {
        //to fetch chat history from firestore
        const chat = fetchChatFromFIreStore()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable={true}
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Dobby
                </Modal.Title>

                {/* if logged-in show */}
                {loggedIn && <div style={{ display: 'flex' }}>

                    <button style={{ cursor: "pointer", top: "3%", right: "3%", position: "absolute" }} onClick={handleSignout}>Sign-Out</button>

                    {/* <button style={{ cursor: "pointer", top: "3%", right: "3%", position: "absolute" }} onClick={handleChatHistory}>Chat History</button> */}
                </div>
                }



            </Modal.Header>
            <Modal.Body style={{
                maxHeight: 'calc(100vh - 210px)',
                overflowY: 'auto'
            }}>
                {/* if not logged-in show Authentication page*/}
                {!loggedIn && <AuthPage />}
                {/* if logged-in show chat Box */}
                {loggedIn && <ChatBox />}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} class="alert" style={{ cursor: "pointer" }}>Close</Button>
                {/* <button onClick={handleAddDoc}>AddDoc</button> */}
            </Modal.Footer>
        </Modal>
    )
}
