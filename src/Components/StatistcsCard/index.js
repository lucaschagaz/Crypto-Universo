import React from 'react';

import "./index.css";

const Card = ({title, value, icon}) => {
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

export default Card