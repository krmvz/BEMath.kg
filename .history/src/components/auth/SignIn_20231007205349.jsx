import { useState } from "react"
import React, {useState} from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = setState('')
  return (
    <div className='sign-in-container'>
      <form>
        <h1>Log in</h1>
        <input type='email' placeholder='Enter your Email'></input>
        <input type='password' placeholder='Enter your password'></input>
      </form>
    </div>
  )
}

export default SignIn
