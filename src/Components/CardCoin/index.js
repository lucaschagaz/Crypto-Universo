import React from 'react'
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"


import styles from "./Card.module.css"

const CardCoin = ({name, price, rank, iconUrl, marketCap, change}) => {

  const c = change;

  return (
    <div className={styles.Cardcoin}>
        <div className={styles.card_cabecalho}>
          <span><img alt="icon" src={iconUrl}/></span>
          <p>
            <span>{rank}.</span>
            {name}
          </p>
        </div>
        <p>Preço: <span> {price}</span></p>
        <p>Market Cap:<span> {marketCap}</span></p>
        <p>Mudança:
          <span className={Number(c) > 0 ? `${styles.Maior}` : `${styles.Menor}`}>
            {change}%
            {Number(c) > 0 ? <FaArrowCircleUp/> : <FaArrowCircleDown/>

            }
          </span>
        </p>
    </div>
  )
}

export default CardCoin;