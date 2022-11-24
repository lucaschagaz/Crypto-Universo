import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [logged, setLogged] = useState(true);
  const [wacthList, setwacthList] = useState([]);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    
  }, [wacthList]);

  return (
    <Crypto.Provider value={{logged, setLogged, wacthList,showForm, setShowForm}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto)
}