import React from 'react'
import { Link } from "react-router-dom"

import "./index.css"

const Button = ({ text, link }) => {
  return (
    <div className="button">
        <Link to={`${link}`}>{text}</Link>
    </div>
  )
}

export default Button;