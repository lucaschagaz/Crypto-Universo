import React from "react";
import millify from "millify";

import { Link } from "react-router-dom";

import CardCoin from "../../Components/CardCoin";
import Search from "../../Components/Search"
// import Conteiner from "../../Components/Conteiner"

import { useGetCryptosQuery } from "../../services/cryptoApi";

import "./index.css";

const CryptoCurrencyPage = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const cryptos = data?.data?.coins;

  console.log(cryptos);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="Currencies-Conteiner">
        <h2>Observação de Mercado da Crypto Universe</h2>
        <p>Encontre moedas promissoras e grandes oportunidades!</p>
        {!simplified && 
          <Search/>
        }
      </div>
      <div className="coins-conteiner">
        {cryptos.map((currency) => (
          <Link to={`/coin/${currency.uuid}`}>
            <CardCoin
              name={currency.name}
              price={millify(currency.price, {
                precision: 3,
                decimalSeparator: ",",
              })}
              rank={currency.rank}
              iconUrl={currency.iconUrl}
              marketCap={millify(currency.marketCap)}
              change={currency.change}
            ></CardCoin>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CryptoCurrencyPage;
