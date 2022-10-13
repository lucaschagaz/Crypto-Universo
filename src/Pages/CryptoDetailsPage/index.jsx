import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import HTMLReactParser from "html-react-parser"
import millify from "millify" 
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';


import Conteiner from "../../Components/Conteiner"
import Loading from "../../Components/Loader"


import { useGetCryptosDetailsQuery } from "../../services/cryptoApi";

const CryptoDetailsPage = () => {
  
  const{ coinId } = useParams()
  const { data, isFetching, isLoading } = useGetCryptosDetailsQuery(coinId)
  const [ timePeriod, setTimePeriod ] = useState("7d")

  const cryptoDetails = data?.data?.coin;

  console.log(data)
  console.log(cryptoDetails)

  if (isLoading || isFetching ) return <Loading/>;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];


  return (
    <Conteiner>
      <div className="coin-heading-container">
        <h2>
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </h2>
        <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </div>
      <select defaultValue="7d" classname="coin-select" onchange={(value)=> setTimePeriod(value)} placeholder="Selecione o periodo">
        {time.map((value)=> <option key={value}>{value}</option>)}
      </select>
      <Conteiner>
        <div>
          <div>
            <h3>{cryptoDetails.name} Value Statistics</h3>
            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Other Stats Info</h3>
            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </div>
        </div>
      </Conteiner>
    </Conteiner>
  )
}

export default CryptoDetailsPage;
