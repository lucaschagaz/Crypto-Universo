import React from 'react'
import millify from "millify";

import { CryptoState } from '../../Contexts/LoggedContext'

import { useGetCryptosQuery } from "../../services/cryptoApi";

import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import styles from "./SideBar.module.css"
import Icon from "../../icons/icon-header.png"
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { db } from "../../FireBase";
import { auth } from '../../FireBase'
import { doc, setDoc } from 'firebase/firestore';


const SideBar = ({ a }) => {

  const { user, wacthList, setAlert, logged, setLogged } = CryptoState()

  const { data, isFetching, isLoading } = useGetCryptosQuery();

  const loggOut = () => {
    signOut(auth)
    setAlert({
      open: true,
      message: "LogOut Successfull.",
      type: "success"
    })
  }

  const show = () => {
    setLogged(!logged)
  }

  const removeFromWatchList = async (coin) =>{

    const coinRef = doc(db, "watchlist", user.uid);

    try {

      await setDoc(
        coinRef, 
        {coins: wacthList.filter((currency) => currency !== coin.uuid)},
        { merge: true }
      )
      setAlert({
        open: true,
        message: `${coin.name} romeved from the Watchlist !`,
        type: "success",
      });
      
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  }

  return (
    <>
      {user && (
        <div className={logged ? `${styles.center}` : `${styles.none}`}>
          <div className={logged ? `${styles.Conteiner}` : `${styles.none}`}>
            <span onClick={show}> <AiFillCloseCircle /></span>
            <div className={styles.profile}>
              {user?.photoURL ? <img src={user?.photoURL} alt={user?.displayName || user?.email} className={styles.photo} /> :
                <img src={Icon} alt={user?.displayName || user?.email} className={styles.photo} />
              }
              <p>{user?.displayName || user?.email}</p>
              <div className={styles.logOut} onClick={loggOut}>
                <p>LogOut</p>
              </div>
            </div>
            <div className={styles.watchList}>
              {data?.data?.coins.map((coin) => {
                if (wacthList.includes(coin.uuid)) {
                  return (
                    <div  className={styles.coin}>
                      <img src={coin.iconUrl} />
                      <span>{coin.name}
                        <span>{millify(coin.price, {
                          precision: 6,
                          decimalSeparator: ","
                        })}</span>
                      </span>
                      <AiFillDelete onClick={()=>removeFromWatchList(coin)}/>
                    </div>
                  )
                }
                else return <></>;
              })
              }
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default SideBar

