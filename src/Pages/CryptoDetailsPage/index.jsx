import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import HTMLReactParser from "html-react-parser"
import millify from "millify" 
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined } from '@ant-design/icons';


import Conteiner from "../../Components/Conteiner"
import Loading from "../../Components/Loader"
import LineChart from "../../Components/LineChart"

import { useGetCryptosDetailsQuery, useGetCryptosHistoryQuery} from "../../services/cryptoApi";

import styles from "./cryptoDetails.module.css"

const CryptoDetailsPage = () => {
  
  const{ coinId } = useParams()
  const [ timePeriod, setTimeperiod ] = useState('3h')
  const { data, isFetching, isLoading } = useGetCryptosDetailsQuery(coinId)
  const { data:coinHistory } = useGetCryptosHistoryQuery({ coinId, timePeriod})
  const cryptoDetails = data?.data?.coin;

  useEffect(()=>{

    console.log(timePeriod)
    
  },[timePeriod])


  if (isLoading || isFetching ) return <Loading/>;

  const time = ['3h', '24h', '7d', '30d', '3m','1y', '3y', '5y'];
  
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total == null ? "valor indisponivel" : cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  const color = data?.data?.coin.color

  return (
    <Conteiner CustomClass="cryptoDetails_conteiner">
      <div className={styles.coin_heading_container}>
        <h1 style={{color: color}}>
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </h1>
        <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </div>
      <div className={styles.period_buttons}>
        <div style={{color: color}}>
          {time.map((day) => (
                <button
                key={day}
                onClick={() => {setTimeperiod(day);
                }}
                >
                {day}
                </button>
              )
            )
          }
        </div>
      </div>
      <LineChart color={color} coinHistory={ coinHistory} currentPrice={cryptoDetails.price} coinName={cryptoDetails.name}/>
      <div className={styles.Stats_Conteiner}>
        <div className={styles.card_Details_Stats}>
          <div>
            <h3>{cryptoDetails.name} Value Statistics</h3>
            <p>An overview showing the statistics of {cryptoDetails.name}.</p>
          </div>
          <div className={styles.card_Stats}>
            {stats.map(({title, icon, value})=>(
              <div style={{backgroundColor: color}} className={styles.coin_stats}>
                <div className={styles.coin_stats_heading}>
                  <p>{icon}</p>
                  <p>{title}</p>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.card_Details_Stats}>
          <div>
            <h3>{cryptoDetails.name} Value Statistics</h3>
            <p>An overview showing the statistics of {cryptoDetails.name}.</p>
          </div>
          <div className={styles.card_Stats}>
            {genericStats.map(({title, icon, value})=>(
              <div style={{backgroundColor: color}} className={styles.coin_stats}>
                <div className={styles.coin_stats_heading}>
                  <p>{icon}</p>
                  <p>{title}</p>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div className={styles.coin_desc}>
        <div>
          <h3  style={{color: color}} > what is {cryptoDetails.name}</h3>
          <div  style={{color: color}} >
            {HTMLReactParser(cryptoDetails.description)}  
          </div>
        </div>
        <h3 className={styles.link_name}>{cryptoDetails.name} Links</h3>
        <div style={{backgroundColor: color}}  className={styles.coin_desc_link}>
          {cryptoDetails.links.map((link)=>(
            <div className={styles.coin_link} key={link.name}>
              <h4>{link.type}</h4>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
          </div>
          ))}
        </div>
      </div>
    </Conteiner>
  )
}

export default CryptoDetailsPage;
