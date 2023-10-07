// import { useState } from "react"
import React, {useState} from 'react';
import {auth}

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () =>{
        //to do sign in
    }
  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log in</h1>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input><br></br>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default SignIn
