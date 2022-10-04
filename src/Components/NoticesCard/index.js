import React from 'react'

const NoticesCard = ({title, value, icon}) => {
    return (
      <div className="Card">
          <div>
            <span>{icon}</span> 
            <p>{title}</p>
          </div>
          <p>{value}</p>
      </div>
    )
  }

export default NoticesCard