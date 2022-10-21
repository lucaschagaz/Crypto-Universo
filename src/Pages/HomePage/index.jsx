import React from "react";
import millify from "millify";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FcDepartment, FcStatistics, FcClock, FcBarChart, FcBullish } from "react-icons/fc";

import Conteiner from "../../Components/Conteiner";
import StatistcsCard from "../../Components/StatistcsCard";
import Button from "../../Components/Button";
import CryptoCurrencyPage from "../../Pages/CryptoCurrencyPage";
import NewsPage from "../../Pages/NewsPage";
import ExchangesPage from "../../Pages/ExchangesPage";
import Loading from "../../Components/Loader"

import { useGetCryptosQuery } from "../../services/cryptoApi";

import "./index.css";

const HomePage = () => {
  const { data, isFetching, isLoading } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(data);

  if (isLoading || isFetching ) return <Loading/>;

  return (
    <>
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
            <StatistcsCard
              icon={<FcBarChart />}
              title="N° de Moedas"
              value={globalStats.total}
            ></StatistcsCard>
            <StatistcsCard
              icon={<FcBullish />}
              title="N° de Exchanges"
              value={millify(globalStats.totalExchanges)}
            ></StatistcsCard>
            <StatistcsCard
              icon={<FcStatistics />}
              title="Cap de marcado"
              value={millify(globalStats.totalMarketCap)}
            ></StatistcsCard>
            <StatistcsCard
              icon={<FcClock />}
              title="volume em 24h"
              value={millify(globalStats.total24hVolume)}
            ></StatistcsCard>
            <StatistcsCard
              icon={<FcDepartment />}
              title="N° de Markets"
              value={millify(globalStats.totalMarkets)}
            ></StatistcsCard>
          </div>
        </Conteiner>
        <div className="header_sections">
          <h1>TOP 10 Cripto Moedas mais pupulares</h1>
          <Button text="Ver Mais" link="/Cryptocurrencies" />
        </div>
        <CryptoCurrencyPage limit />
        <div className="header_sections">
          <h1>Noticias mais relevantes do mundo cripto</h1>
          <Button text="Ver Mais" link="/news"/>
        </div>
        <NewsPage limit />
        <div className="header_sections">
          <h1>6 Exchanges mais valiosas</h1>
          <Button text="Ver Mais" link="/news"/>
        </div>
        <ExchangesPage limit/>
      </Conteiner>
    </>
  );
};

export default HomePage;
