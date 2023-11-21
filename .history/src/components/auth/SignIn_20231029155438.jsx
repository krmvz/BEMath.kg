// import { useState } from "react"
import { useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import "./sign.scss";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate('/dashboard');
    };

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            navigateToContacts()
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log in to your account</h1>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input><br></br>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default SignIn;
