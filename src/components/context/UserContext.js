import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading,setLoading] = useState(true);

    const signUpNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser);
            setLoading(false)
            console.log('currentuser',currentuser)
        })

        return ()=> unsubscribe()
    },[])

    const authInfo = { user, setUser, auth, signUpNewUser, loginUser, logOut , loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;