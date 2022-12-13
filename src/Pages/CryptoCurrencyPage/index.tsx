import React, { useState, useEffect } from "react";
import millify from "millify";

import { Link } from "react-router-dom";

import CardCoin from "../../Components/CardCoin";
import Search from "../../Components/Search"
import Loading from "../../Components/Loader"
import Pagination from "../../Components/Pagination"
import Conteiner from '../../Components/Conteiner';

import { useGetCryptosQuery, ICrypto } from "../../services/cryptoApi";

import styles from "./CryptoCurrencyPage.module.css";

const CryptoCurrencyPage = ({ limit }: any) => {
  const count = limit ? 3 : 100;
  const { data:CryptoList, isFetching, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<ICrypto[]>();
  const [searchTerm, setSearchTerm] = useState('');

  const [itensPerPage, setItems ] = useState(9)
  const [currencyPage, setCurrencyPage ] = useState(0)
 
  useEffect(()=>{   
    const filteredData = CryptoList?.filter((item) => item.name.toLowerCase().includes(searchTerm))
    
    if(!isFetching){
      setCryptos(filteredData)
    }
    
  },[CryptoList, searchTerm])


  if (isLoading || isFetching ) return <Loading/>;

  const startIndex = currencyPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currencyList = cryptos?.slice(startIndex, endIndex)


 
  console.log(cryptos);

  return (
    <Conteiner CustomClass="Section_Conteiner">
        {!limit && (
          <div className={styles.Currencies_Conteiner}>
            <h1>Observação de Mercado da Crypto Universe</h1>
            <Search value={searchTerm} handleOnText={(e) =>
              setSearchTerm(e.target.value)} 
            />
          </div>  
          
        )}
      <div className={styles.coins_conteiner}>
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
    {!limit && cryptos.length > 9 && (
      <Pagination 
        PerPage={itensPerPage}
        currency={currencyPage} 
        list={cryptos?.length!}
        setCurrencyPage={setCurrencyPage} 
      /> 
    )}
    </Conteiner>
  );
};

export default CryptoCurrencyPage;
