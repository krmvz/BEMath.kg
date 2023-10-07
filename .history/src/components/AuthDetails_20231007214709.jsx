import React, {useEffect, useState} from 'react';
import {auth} from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setauthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {

        })
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default AuthDetails;
