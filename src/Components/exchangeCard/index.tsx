import React from 'react'

import styles from "./exchangeCard.module.css"

interface IExchangeCard {
  name:string
  year:number
  volume24h: string
  volumetotal: string
  iconUrl:string
  rank:number
  country:string
}

const ExchangeCard = ({name, year, volume24h,volumetotal, iconUrl, rank, country}: IExchangeCard) => {

  return (
    <div className={styles.ExchengeCard}>
        <div className={styles.card_cabecalho}>
          <span><img alt="icon" src={iconUrl}/></span>
          <p>
            <span>{rank}.</span>
            {name}
          </p>
        </div>
        <div  className={styles.card_infos}>
          <p>Ano que foi Estabelecido: <span> {year}</span></p>
          <p>Pais de origem:<span> {country}</span></p>
        </div>
        <div  className={styles.card_infos}>
          <p>Volume de transações de bitcoin em 24h:<span> {volume24h} </span></p>
          <p>Volume de transações de bitcoin normalizados: <span>{volumetotal} </span></p>
        </div>
    </div>
  )
}

export default ExchangeCard;
