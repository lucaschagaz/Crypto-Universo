import React, { useState, useEffect , ChangeEvent} from "react";
import millify from "millify";

import { Link } from "react-router-dom";

import CardCoin from "../../Components/CardCoin";
import Search from "../../Components/Search"
import Loading from "../../Components/Loader"
import Pagination from "../../Components/Pagination"
import Conteiner from '../../Components/Conteiner';

import { ICrypto, TypeLimit } from "../../types/types"
import { useGetCryptosQuery } from "../../services/cryptoApi";

import styles from "./CryptoCurrencyPage.module.css";

const CryptoCurrencyPage = ({ limit }: TypeLimit) => {
  const count = limit ? 3 : 100;
  const { data:CryptoList, isFetching, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<ICrypto[]>();
  const [searchTerm, setSearchTerm] = useState('');

  const [itensPerPage, setItems ] = useState(9)
  const [currencyPage, setCurrencyPage ] = useState(0)
 
  useEffect(()=>{   
    const filteredData = CryptoList?.data?.coins?.filter((item :ICrypto ) => item.name.toLowerCase().includes(searchTerm))
    
    if(!isFetching){
      setCryptos(filteredData)
    }
    
  },[CryptoList, searchTerm])


  if (isLoading || isFetching ) return <Loading/>;

  const startIndex = currencyPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currencyList = cryptos?.slice(startIndex, endIndex)

  return (
    <Conteiner CustomClass="Section_Conteiner">
        {!limit && (
          <div className={styles.Currencies_Conteiner}>
            <h1>Observação de Mercado da Crypto Universe</h1>
            <Search value={searchTerm} handleOnText={(e:ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)}
            />
          </div>  
          
        )}
      <div className={styles.coins_conteiner}>
        {currencyList?.map((currency: ICrypto) => (
          <Link key={currency.uuid} to={`/CryptoDetails/${currency.uuid}`}>
            <CardCoin
              name={currency.name}
              price={currency.price}
              rank={currency.rank}
              iconUrl={currency.iconUrl}
              marketCap={currency.marketCap}
              change={currency.change}
            ></CardCoin>
          </Link>
        ))}
      </div>
    {!limit && cryptos?.length! > 9 &&(
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
