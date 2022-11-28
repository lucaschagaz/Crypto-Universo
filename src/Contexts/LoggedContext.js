import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db} from "../FireBase"
import { onSnapshot, doc } from "firebase/firestore";
const Crypto = createContext();

const CryptoContext = ({ children }) => {

  const [user, setUser] = useState(null);
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
          // console.log(coin.data().coins, "Coin Exist");
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