import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ChatBox from './ChatBox';
import AuthPage from './Login-SignUp_Page/AuthPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export const ChatModal = (props) => {
    const [loggedIn, setLoggedIn] = useState(null)

    const auth = getAuth();
    useEffect(() => {

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
    const handleSignout = (event) => {
        event.preventDefault()
        auth.signOut()

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

                {loggedIn && <button style={{ cursor: "pointer", top: "3%", right: "3%", position: "absolute" }} onClick={handleSignout}>Sign-Out</button>}

               
            </Modal.Header>
            <Modal.Body style={{
                maxHeight: 'calc(100vh - 210px)',
                overflowY: 'auto'
            }}>
                {!loggedIn && <AuthPage />}
                {loggedIn && <ChatBox />}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} class="alert" style={{ cursor: "pointer" }}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
