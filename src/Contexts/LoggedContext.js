import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [logged, setLogged] = useState(true);
  const [wacthList, setwacthList] = useState([]);

  useEffect(() => {
    
  }, [wacthList]);

  return (
    <Crypto.Provider value={{ logged, setCurrency, wacthList }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto)
}