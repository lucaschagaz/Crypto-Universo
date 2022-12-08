import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db} from "../FireBase"
import { onSnapshot, doc } from "firebase/firestore";

type AlertProps = {
  open: boolean,
  message:string,
  type:string
}

type CryptoContextData = {
  logged:boolean,
  setLogged:(logged: boolean) => void,
  wacthList:string[]
  alert:AlertProps
  setAlert:(alert: AlertProps) => void,
  user: User | null
}

type ContextProps = {
  children: React.ReactNode
}

export const Crypto = createContext({} as CryptoContextData);

const CryptoContext = ({ children }: ContextProps) => {

  const [user, setUser] = useState(null as User | null);
  const [logged, setLogged] = useState(false);
  const [wacthList, setWatchlist] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message:"",
    type: "",
  });

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      };
    });

  }, []);

  return (
    <Crypto.Provider 
      value={{
        logged, 
        setLogged, 
        wacthList, 
        alert,
        setAlert,
        user }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => useContext(Crypto)
