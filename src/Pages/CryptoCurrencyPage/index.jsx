import React from 'react'
import millify from "millify"

import { useState } from 'react'
import { Link } from "react-router-dom"

import CardCoin from '../../Components/CardCoin'
import Conteiner from "../../Components/Conteiner" 

import { useGetCryptosQuery } from "../../services/cryptoApi"

import "./index.css"

const CryptoCurrencyPage = ({limit}) => { 

  const count = limit ? 10 : 100;
  
  const { data, isFetching } = useGetCryptosQuery(count);

  const cryptos = data?.data?.coins;

  console.log(cryptos)

  if(isFetching) return "Loading..."

  return (
    <>
      <Conteiner CustomClass="Currencies-Conteiner">
        <div>
          <h2>Observação de Mercado da CryptoVerse</h2>
          <p>Encontre moedas promissoras e grandes oportunidades!</p>
        </div>
        <div className="coins-conteiner">
          {cryptos.map((currency)=>(
            <CardCoin 
              name={currency.name}
              price={millify(currency.price)} 
              rank={currency.rank} 
              iconUrl={currency.iconUrl} 
              marketCap={millify(currency.marketCap)}
              change={currency.change}
            ></CardCoin>
          ))}
        </div>
      </Conteiner>
    </>
  )
}

export default CryptoCurrencyPage;