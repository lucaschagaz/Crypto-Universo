import React from 'react'

import "./index.css"

type ConteinerProps = {
  CustomClass:string
  children:React.ReactNode
}

const Conteiner = ({CustomClass,children }: ConteinerProps) => {
  return (
    <div className={`${"conteiner"} ${CustomClass}`}>
        {children}
    </div>
  )
}

export default Conteiner