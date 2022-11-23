import React from 'react'
import { Link } from "react-router-dom"

import styles from "./Button.module.css"

const Button = ({ text, link }) => {
  return (
    <div className={styles.button}>
        <Link to={`${link}`}>{text}</Link>
    </div>
  )
}

export default Button;