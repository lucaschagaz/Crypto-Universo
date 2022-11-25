import React from 'react'
import { CryptoState } from '../../Contexts/LoggedContext'

import styles from "./SideBar.module.css"
import Icon from "../../icons/icon-header.png"
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../FireBase'

const SideBar = ({ a }) => {

  const { user, setUser, watchList, setWatchList, alert, setAlert, logged } = CryptoState()

  const loggOut = () => {
    signOut(auth)
    setAlert({
      open: true,
      message: "LogOut Successfull.",
      type: "success"
    })
  }
  return (
    <>
      {user && (
        <div className={logged ? `${styles.center}` : `${styles.none}`}>
          <div className={logged ? `${styles.Conteiner}` : `${styles.none}`}>
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
              <div>
                
              </div>
              <Link to="/WatchList">
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