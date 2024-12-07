import { createContext, useState } from "react";
// import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import  auth  from "../firebase.init";


// getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile

export const AuthContext = createContext(null);
// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // console.log(user, loading);

    const createNewUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // const userLogin = (email,password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth,email,password)
    // };

    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth)
    // };

    // const updateUserProfile = (updateData) => {
    //     return updateProfile(auth.currentUser , updateData)
    // }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        // logOut,
        // userLogin,
        loading,
        // updateUserProfile,
    };

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth ,  currentUser => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     })
    //     return () => {
    //         unSubscribe();
    //     };
    // },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;