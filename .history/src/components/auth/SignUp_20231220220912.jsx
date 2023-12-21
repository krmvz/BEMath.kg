import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='sign-in-container'>
      <form onSubmit={signUp}>
        <h1>Create account</h1>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input><br></br>
        <input type='password' placeholder='Write your password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
        <input type='password' placeholder='Write your password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br>
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp
