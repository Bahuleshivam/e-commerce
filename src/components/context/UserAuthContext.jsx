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
    const [user, setUser] = useState("");

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password){
        // console.log(email)
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logInAnonymously() {
        return signInAnonymously(auth);
      }

    // function anony  () {
    //     signInAnonymously(auth)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         setUser(user)
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.error(errorCode,errorMessage);
    //     })
    // }

    
    function LogOut() {
        return signOut(auth)
    } 
    
   

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            

        })
        return ()=>{
            unsubscribe();

        }

    },[])
    return (
        <userAuthContext.Provider value={{user, signUp, logIn, LogOut, logInAnonymously }}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth() {
    return useContext(userAuthContext);
}