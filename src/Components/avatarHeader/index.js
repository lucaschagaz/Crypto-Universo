import React from 'react'
import Icon from "../../icons/icon-header.png"
import styles from './avatar.module.css'
import { CryptoState } from '../../Contexts/LoggedContext'

const Avatar = ({ open ,setOpen}) => {

  const { user, logged, setLogged } = CryptoState()  

  const show = () =>{
    setLogged(!logged)
    setOpen(!open)
  }  
  
  return (
    <div onClick={show} className={styles.avatar}>
      {user?.photoURL ?  <img src={user?.photoURL} alt={user?.displayName || user?.email} className={styles.photo} /> :
         <img src={Icon} alt={user?.displayName || user?.email} className={styles.photo} />
      }
      <p>{user.displayName}</p>
    </div>
  )
}

export default Avatar;