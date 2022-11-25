import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(true);
  const [wacthList, setwacthList] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message:"",
    type: "",
  });

  useEffect(() => {
    
  }, [wacthList]);

  return (
    <Crypto.Provider value={
      {
        logged, 
        setLogged, 
        wacthList,
        alert,
        setAlert
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