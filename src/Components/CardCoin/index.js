import React from 'react'
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"


import "./index.css"

const CardCoin = ({name, price, rank, iconUrl, marketCap, change}) => {

  const c = change;

  return (
    <div className="Cardcoin">
        <div className="card-cabecalho">
          <span><img alt="icon" src={iconUrl}/></span>
          <p>
            <span>{rank}.</span>
            {name}
          </p>
        </div>
        <p>Preço: <span> {price}</span></p>
        <p>Market Cap:<span> {marketCap}</span></p>
        <p>Mudança:
          <span className={Number(c) > 0 ? "Maior" : "Menor" }>
            {change}%
            {Number(c) > 0 ? <ArrowUpOutlined/> : <ArrowDownOutlined/>

            }
          </span>
        </p>
    </div>
  )
}

export default CardCoin;