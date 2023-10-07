import React, {useEffect, useState} from 'react';
import {auth} from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user.currentUser)
            }else{
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out succesful')
        }).catch(error => console.log(error))
    }
  return (
    <div>
      {authUser ? <><p>`Signed in as ${authUser.email}a</p><button onClick={userSignOut}>Sign out</button></> : <p> Signed out</p>}
    </div>
  )
}

export default AuthDetails;
