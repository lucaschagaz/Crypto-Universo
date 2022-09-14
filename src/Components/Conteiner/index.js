import React from 'react'

import "./index.css"

const Conteiner = (props) => {
  return (
    <div className={`${"conteiner"} ${props.CustomClass}`}>
        {props.children}
    </div>
  )
}

export default Conteiner