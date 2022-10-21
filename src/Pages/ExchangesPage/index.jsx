import React, { useState } from 'react'
import millify from 'millify';

import Conteiner from '../../Components/Conteiner';
import Loading from '../../Components/Loader';
import Pagination from '../../Components/Pagination'

import { useGetExchangQuery } from '../../services/exchangeApi'
import ExchangeCard from '../../Components/exchangeCard';

import styles from "./exchange.module.css"

const ExchangesPage = () => {

  const { data:exchageList , isFetching, isLoading} = useGetExchangQuery();
  const [itensPerPage, setItems ] = useState(9)
  const [currencyPage, setCurrencyPage ] = useState(0)

  if (isLoading || isFetching ) return <Loading/>;

  const startIndex = currencyPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currencyExchange = exchageList.slice(startIndex, endIndex)

  console.log(exchageList)

  return (
    <Conteiner CustomClass="Section_Conteiner">
      <div className={styles.exchange_Conteiner}>
        {currencyExchange.map((exchange)=>(
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
      <Pagination 
        PerPage={itensPerPage}
        currency={currencyPage} 
        list={exchageList?.length}
        setCurrencyPage={setCurrencyPage} 
      />
    </Conteiner>
  )
}

export default ExchangesPage;
