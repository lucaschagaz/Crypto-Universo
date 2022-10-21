import React, { useState, useEffect } from "react";
import millify from "millify";

import { Link } from "react-router-dom";

import CardCoin from "../../Components/CardCoin";
import Search from "../../Components/Search"
import Loading from "../../Components/Loader"
import Pagination from "../../Components/Pagination"
import Conteiner from '../../Components/Conteiner';

import { useGetCryptosQuery } from "../../services/cryptoApi";

import "./index.css";

const CryptoCurrencyPage = ({ limit }) => {
  const count = limit ? 10 : 100;
  const { data, isFetching, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [itensPerPage, setItems ] = useState(10)
  const [currencyPage, setCurrencyPage ] = useState(0)
 
  useEffect(()=>{   
    const filteredData = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))
    
    if(!isFetching){
      setCryptos(filteredData)
    }
    

  },[data, searchTerm])



  if (isLoading || isFetching ) return <Loading/>;

  const startIndex = currencyPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currencyList = data?.data?.coins.slice(startIndex, endIndex)


 
  console.log(cryptos);

  return (
    <Conteiner CustomClass="Home-Conteiner">
      <div className="Currencies-Conteiner">
        {!limit && (
          <div>
          <Search value={searchTerm} handleOnText={(e) =>
            setSearchTerm(e.target.value)} 
          />
          <h2>Observação de Mercado da Crypto Universe</h2>
          </div>  
        )}
      </div>
      <div className="coins-conteiner">
        {currencyList?.map((currency) => (
          <Link key={currency.uuid} to={`/CryptoDetails/${currency.uuid}`}>
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
    {!limit && (
      <Pagination 
        PerPage={itensPerPage}
        currency={currencyPage} 
        list={data?.data?.coins.length}
        setCurrencyPage={setCurrencyPage} 
      />
    )}
    </Conteiner>
  );
};

export default CryptoCurrencyPage;
