import React from "react";
import millify from "millify";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import {
  FcDepartment,
  FcStatistics,
  FcClock,
  FcBarChart,
  FcBullish,
} from "react-icons/fc";

import Conteiner from "../../Components/Conteiner";
import StatistcsCard from "../../Components/StatistcsCard";
import Button from "../../Components/Button";
import CryptoCurrencyPage from "../../Pages/CryptoCurrencyPage";
import NewsPage from "../../Pages/NewsPage";
import ExchangesPage from "../../Pages/ExchangesPage";
import Loading from "../../Components/Loader";

import Planet from "../../icons/planet.svg"
// import Planet from "../../icons/planet-header.svg"

import { useGetCryptosQuery } from "../../services/cryptoApi";

import styles from "./HomePage.module.css";

const HomePage = () => {

  const { data, isFetching, isLoading } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isLoading || isFetching) return <Loading />;
  
  return (
    <>
      <Conteiner CustomClass="homePage_Conteiner">
        <div className={styles.header_infos}>
          <div className={styles.header_infos_header}>
            <h1>Descubra, Analise e Compare cripto ativos</h1>
            <div className={styles.header_infos_buttons}>
              <button>
                <Link to="/">
                  Descubra agora
              </Link>
              </button>
              <Link to="/">
                <span>
                  <FaAngleRight />
                </span>
                Login
              </Link>
            </div>
          </div>
          <div className={styles.image_home}>
            <img src={Planet} alt="planet"/>
          </div>
        </div>
        <div className={styles.header_sections}>
          <div  className={styles.header_sections_link}>
            <h1>Noticias do mundo cripto</h1>
            <Button text="Ver Mais" link="/news" />
          </div>
          <NewsPage limit />
        </div>
        <div className={styles.statistics_conteiner}>
          <h2>Estatisticas Globais</h2>
          <div className={styles.statistics_items}>
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
        </div>
        <div className={styles.header_sections}>
          <div className={styles.header_sections_link}>
            <h1>TOP 3 Cripto Moedas</h1>
            <Button text="Ver Mais" link="/Cryptocurrencies" />
          </div>
          <CryptoCurrencyPage limit />
        </div>
        <div className={styles.header_sections}>
          <div  className={styles.header_sections_link}>
            <h1>Exchanges mais valiosas</h1>
            <Button text="Ver Mais" link="/exchanges" />
          </div>
          <ExchangesPage limit />
        </div>
      </Conteiner>
    </>
  );
};

export default HomePage;
