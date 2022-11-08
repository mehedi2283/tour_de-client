import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from "./../../firebase/firebase.config";
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const verifyEmail = () => {
     return sendEmailVerification(auth.currentUser)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user inside state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [theme, setTheme] = useState('light');
  // const [darkMode, setDarkMode] = useState(false);
 
  const handleTheme = () =>{
    // setDarkMode(!darkMode)
    
    if(theme ==='light'){
      setTheme('dark')
      toast.success('Dark Mode')
    }
    else{
      setTheme('light')
      toast.success('Light Mode')

    }   
  }
  useEffect(()=>{
    document.body.className = theme;
  }
    ,[theme])
  

  const authInfo = {
    user,
    loading,
    providerLogin,
    logOut,
    createUser,
    signIn,
    updateUserProfile,
    verifyEmail,
    handleTheme,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
