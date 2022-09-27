import React from 'react';

import "./index.css";

const Card = ({title, value}) => {
  return (
    <div className="Card">
        <p> {title}</p>
        <p>{value}</p>
    </div>
  )
}

export default Card