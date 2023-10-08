// import { useState } from "react"
import React, {useState} from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='sign-in-container'>
      <form>
        <h1>Log in</h1>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setEmail(e.target.value)} ></input>
      </form>
    </div>
  )
}

export default SignIn