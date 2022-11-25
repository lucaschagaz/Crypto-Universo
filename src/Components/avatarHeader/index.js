import React from 'react'
import styles from './avatar.module.css'
import { CryptoState } from '../../Contexts/LoggedContext'

const Avatar = () => {

  const { user, logged, setLogged } = CryptoState()  

  const show = () =>{
    setLogged(!logged)
  }  
  
  return (
    <div onClick={show} className={styles.avatar}>
        
    </div>
  )
}

export default Avatar;