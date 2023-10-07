import React, {useEffect, useState} from 'react';
import {auth} from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged()
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default AuthDetails;
