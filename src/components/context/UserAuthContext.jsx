import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInAnonymously
} from 'firebase/auth'
import { auth } from '../firebase'

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }){
    const [user, SetUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password){
        console.log(email)
        return signInWithEmailAndPassword(auth, email, password);
    }

    function LogOut() {
        return signOut(auth)
    } 
    
   

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            SetUser(currentUser);
            

        })
        return ()=>{
            unsubscribe();

        }

    },[])
    return (
        <userAuthContext.Provider value={{user, signUp, logIn, LogOut }}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth() {
    return useContext(userAuthContext);
}