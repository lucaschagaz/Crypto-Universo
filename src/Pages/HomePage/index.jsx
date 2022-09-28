import React from "react";
import millify from "millify"

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

import Conteiner from "../../Components/Conteiner";
import Card from "../../Components/Card";
import CryptoCurrencyPage from "../../Pages/CryptoCurrencyPage";

import { cryptoApi } from "../../services/cryptoApi";

import "./index.css";


const HomePage = () => {

  const { data, isFetching } = cryptoApi.useGetCryptosQuery()
  const globalStats = data?.data?.stats

  console.log(data)

  if(isFetching) return "Loading..."

  return (
    <div className="HomePage">
      <Conteiner CustomClass="homePage_Conteiner">
        <Conteiner CustomClass="Image">
          <h1>Descubra, Analise e Compre CryptoMo edas e NFTs</h1>
          <div className="buttons">
            <button> Descubra agora</button>
            <Link to="/">
              <span>
                <FaAngleRight />
              </span>
              Criar
            </Link>
          </div>
        </Conteiner>
        <Conteiner CustomClass="Slider">
          <div className="sliderConteiner">
            <h2>Os Principais Ativos em tempo real.</h2>
          </div>
        </Conteiner>
        <Conteiner CustomClass="statistics">
            <h2>Estatisticas Globais</h2>
            <div className="statistics_items">
               <Card title="Total CryptoCurrencies" value={globalStats.total}></Card>
              <Card title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Card>
              <Card title="Total Markets Cap" value={millify(globalStats.totalMarketCap)}></Card>
              <Card title="Total 24h volume" value={millify(globalStats.total24hVolume)}></Card>
              <Card title="Total Markets" value={millify(globalStats.totalMarkets)}></Card>
            </div>
        </Conteiner>
        <Conteiner CustomClass="Currencies-Home-Conteiner">
          <h2>10 TOP must Popular CryptoCurrencies</h2>
          <CryptoCurrencyPage limit/>
        </Conteiner>
      </Conteiner>
    </div>
  );
};

export default HomePage;
