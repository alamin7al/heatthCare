
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializaatuntication from "./Firebase.init";
initializaatuntication()


const UseFarebse = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setsLoading] = useState(true)
    // const [name,setName]=useState('')
    const [error,setError]=useState('')
    const auth = getAuth();
    //Google
    const signInusonGoogle = () => {
        setsLoading(true)
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUsers(result.user)
            // })
            .finally(() => setsLoading(false))

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           setError(errorCode,errorMessage)
          });


    }
    //New User
    const EmailSignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUsers(user)
               
            })
            .catch(error=>{
                setError(error.message)
            })

    }
    //Login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUsers(user)
            })
            .catch(error=>{
                setError(error.message)
            })
    }


    useEffect(() => {
        const usnsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setsLoading(false)
        });

        return () => usnsubscribed
    }, [])

    //logOut
    const logOut = () => {
        setsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setsLoading(false))
    }
    //Name
    // const UpdateName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then((result) => {
    //             setName(result)

    //         }).catch((error) => {

    //         });
    // }
    return {
        users,
        logOut,
        signInusonGoogle,
        isLoading,
        EmailSignIn,
        processLogin,
        setError,
        error
        
        
        
        


    }
}

export default UseFarebse











