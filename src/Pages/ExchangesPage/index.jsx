import React from 'react'
import millify from 'millify';

import Conteiner from '../../Components/Conteiner';
import Loading from '../../Components/Loader';

import { useGetExchangQuery } from '../../services/exchangeApi'
import ExchangeCard from '../../Components/exchangeCard';

import styles from "./exchange.module.css"

const ExchangesPage = ({ limit }) => {

  const { data:exchageList , isFetching, isLoading} = useGetExchangQuery();

  console.log(exchageList)

  if (isLoading || isFetching ) return <Loading/>;

  return (
    <Conteiner>
      <div className={styles.exchange_Conteiner}>
        {exchageList.map((exchange)=>(
          <a href={exchange.url} key={exchange.id} target="_blank" rel="noreferrer">
              <ExchangeCard
              name={exchange.name}
              year={exchange.year_established}
              country={exchange.country}
              rank={exchange.trust_score_rank}
              volume24h={millify(exchange.trade_volume_24h_btc, {
                precision: 3,
                decimalSeparator: ",",
              })}
              
              iconUrl={exchange.image}
              volumetotal={millify(exchange.trade_volume_24h_btc_normalized)}
            ></ExchangeCard>
          </a>
        ))}
      </div>
    </Conteiner>
  )
}

export default ExchangesPage;
