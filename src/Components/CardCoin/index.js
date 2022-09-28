import React from 'react'

import "./index.css"

const CardCoin = ({name, price, rank, iconUrl, marketCap, change}) => {
  return (
    <div className="Cardcoin">
        <div>
            <span><img alt="icon" src={iconUrl}/></span>
            <p><span>{rank}.</span>{name}</p>
        </div>
        <p>Preço: {price}</p>
        <p>Market Cap:{marketCap}</p>
        <p>Mudança:{change}</p>
    </div>
  )
}

export default CardCoin;