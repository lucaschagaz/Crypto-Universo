import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase"

const Crypto = createContext();

const CryptoContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [wacthList, setwacthList] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message:"",
    type: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user)
      } else setUser(null);
    });

  }, []);

  return (
    <Crypto.Provider value={
      {
        logged, 
        setLogged, 
        wacthList,
        alert,
        setAlert,
        user
       }
      }>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto)
}