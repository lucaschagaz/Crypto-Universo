import React from 'react'
import { CryptoState } from '../../Contexts/LoggedContext'

import styles from "./SideBar.module.css"
import Icon from "../../icons/icon-header.png"
import { Link } from 'react-router-dom'

const SideBar = ({a}) => {

  const { user, setUser, watchList, setWatchList, alert, setAlert, logged } = CryptoState()

  const loggOut = () =>{
    setUser(null)
  }
  return (
    <div className={ user ? `${styles.Conteiner}` : `${styles.none}`}>
        {/* <div className={styles.center}> */}
            <div className={styles.profile}>
                <img src={Icon} alt="profile-picture" className={styles.photo}/>
                <p></p>
                <div className={styles.logOut} onClick={loggOut}>
                    <p>LogOut</p>
                </div>
            </div>
            <div className={styles.watchList}>

            </div>
            <div className={styles.rodaPé}>
                <Link to="/">
                    Ver wacthList
                </Link>
            </div>
        {/* </div> */}
    </div>
  )
}

export default SideBar