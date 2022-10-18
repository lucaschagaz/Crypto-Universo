import React from 'react'

import styles from "./exchangeCard.module.css"

const ExchangeCard = ({name, year, volume24h,volumetotal, iconUrl, rank, country}) => {

  return (
    <div className={styles.ExchengeCard}>
        <div className={styles.card_cabecalho}>
          <span><img alt="icon" src={iconUrl}/></span>
          <p>
            <span>{rank}.</span>
            {name}
          </p>
        </div>
        <div>
          <p>Ano que foi Estabelecido: <span> {year}</span></p>
          <p>Pais de origem:<span> {country}</span></p>
        </div>
        <div>
          <p>Volume de transações de bitcoin em 24h:<span> {volume24h} </span></p>
          <p>Volume de transações de bitcoin normalizados: <span>{volumetotal} </span></p>
        </div>
    </div>
  )
}

export default ExchangeCard;
