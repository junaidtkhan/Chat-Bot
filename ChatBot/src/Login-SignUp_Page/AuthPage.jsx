import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SignupPage from './Signup2'
import LoginPage from './Login2'
// import {app} from './FirebaseConfig';

const AuthPage = () => {
    const [accountExist, setAccountExist] = useState(false)
    

    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
            
    //         console.log('AuthPage')
    //         console.log(user.email)
    //     } else {
    //         console.log('user logged out')
    //     }
    // });

    const setLoginHandler = (event) => {
        event.preventDefault()
        //to switch between sign-up and log-in page
        setAccountExist(!accountExist)
    }

    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }} >

            <div>

                {!accountExist && <SignupPage />}
                {accountExist && <LoginPage />}
            </div>

            <div>
                <br />
                <span style={{cursor:"pointer"}} onClick={setLoginHandler}>{!accountExist ? 'Already have an account?  login' : "signup"}</span>
            </div>
            

        </div>

    )
}
export default AuthPage