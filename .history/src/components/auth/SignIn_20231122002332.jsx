// import { useState } from "react"
import { useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import "./sign.scss";
import logo from '../../images/logo.jpeg';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const navigateToDash = () => {
      navigate('/dashboard');
    };

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigateToDash()
        }).catch((error) => {
            console.log(error);
            document.getElementById("error").innerHTML = "Your"
        })
    }
  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <img src={logo} alt="Logo" />
        <br />
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input><br />
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br />
        <button type='submit' className='btn btn-primary'>Log in</button>
        <div id="error"></div>
      </form>
    </div>
  )
}

export default SignIn;
