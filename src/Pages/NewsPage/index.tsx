import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import NoticesCard from "../../Components/NoticesCard";
import Loading from "../../Components/Loader"
import Pagination from "../../Components/Pagination"
import Conteiner from '../../Components/Conteiner';


import { useGetNewsQuery } from "../../services/newsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { INews } from "../../types/types";


import styles from "./news.module.css";

const NewsPage = ({ limit }: any) => {

  const [searchTerm, setSearchTerm] = useState("bitcoin");
  const count = limit ? 3 : 100;
  const { data: cryptoNews, isFetching, isLoading } = useGetNewsQuery({ count, searchTerm });
  const { data: cryptoList } = useGetCryptosQuery(count);
  // const [news, setNews] = useState([]);

  const [itensPerPage, setItems] = useState(9)
  const [currencyPage, setCurrencyPage] = useState(0)

  // useEffect(() => {

  //   if(!isFetching) {
  //     setNews(cryptoNews?.);
  //   }
  // }, [cryptoNews, searchTerm]);

  if (isLoading || isFetching) return <Loading />;


  const startIndex = currencyPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currencyList = cryptoNews?.slice(startIndex, endIndex)

  return (
    <Conteiner CustomClass="Section_Conteiner">
      {!limit && (
        <div className={styles.newsTitle_Conteiner}>
          <h1>Notícias</h1>
          {/* <div className={styles.select}>
            {cryptoList?.data?.coins?.map((coin)=>(
              <button onClick={()=>{setSearchTerm(coin.name)}}>{coin.name}</button>
            ))
            }
          </div> */}
        </div>
      )}
      <div className={styles.news_Conteiner}>
        {currencyList?.map((Single:INews, i:number) => (
          <a href={Single.url} key={i} target="_blank" rel="noreferrer">
            <NoticesCard
              name={Single.name.length > 50
                ? `${Single.name.substring(0, 50)}...`
                : Single.name}
              image={Single?.image}
              description={
                Single.description.length > 80
                  ? `${Single.description.substring(0, 80)}...`
                  : Single.description
              }
              provider={Single.provider}
              // imageProvider={Single.provider[0]?.image}
              datePublished={Single.datePublished}
            ></NoticesCard>
          </a>
        ))}
      </div>
      {!limit && (
        <Pagination
          PerPage={itensPerPage}
          currency={currencyPage}
          list={cryptoNews?.length!}
          setCurrencyPage={setCurrencyPage}
        />
      )}
    </Conteiner>
  );
};

export default NewsPage;
