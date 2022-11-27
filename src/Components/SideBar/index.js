import React from 'react'
import { CryptoState } from '../../Contexts/LoggedContext'

import { AiFillCloseCircle} from "react-icons/ai";
import styles from "./SideBar.module.css"
import Icon from "../../icons/icon-header.png"
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../FireBase'

const SideBar = ({ a }) => {

  const { user, setUser, watchList, setWatchList, alert, setAlert, logged, setLogged } = CryptoState()

  const loggOut = () => {
    signOut(auth)
    setAlert({
      open: true,
      message: "LogOut Successfull.",
      type: "success"
    })
  }

  const show = () =>{
    setLogged(!logged)
  } 
  return (
    <>
      {user && (
        <div className={logged ? `${styles.center}` : `${styles.none}`}>
          <div className={logged ? `${styles.Conteiner}` : `${styles.none}`}>
            <span onClick={show}> <AiFillCloseCircle/></span>
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

            </div>
            <div className={styles.rodaPé}>
              <Link to="/WatchListPage">
                Ver WatchList
              </Link>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default SideBar

