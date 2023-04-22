import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { new_user } from '../FireStore';
import { addDoc, collection, CollectionReference } from 'firebase/firestore';
import { db } from '../main';
import { doc } from 'firebase/firestore';
function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password === confirmPassword) {

      const auth = getAuth();
      //create a new user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 

          //create a document for new user just signed-up
          addDoc(collection(db, 'users'), { "uid": `${userCredential.user.uid}`, "chat": [], "site_id": "" }).then((res) => { console.log(res.id) }).catch((err) => { console.log(err.message) })
        })
        .catch((error) => {
         console.log(error.message)
          // ..
        });
    }
    else {
      alert('password and confirm password are not same. plz Enter again.')
    }
  }

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button style={{ cursor: "pointer" }} type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;