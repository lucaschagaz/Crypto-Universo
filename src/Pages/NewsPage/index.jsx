import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import NoticesCard from "../../Components/NoticesCard";
import Loading from "../../Components/Loader"
import Pagination from "../../Components/Pagination"
import Conteiner from '../../Components/Conteiner';



import { useGetNewsQuery } from "../../services/newsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";


import styles from "./news.module.css";

const NewsPage = ({ limit }) => {

  const [searchTerm, setSearchTerm] = useState("bitcoin");
  const count = limit ? 3 : 100;
  const { data: cryptoNews, isFetching, isLoading } = useGetNewsQuery({ count, searchTerm });
  const { data: cryptoList } = useGetCryptosQuery(count);
  const [news, setNews] = useState([]);

  const [itensPerPage, setItems] = useState(9)
  const [currencyPage, setCurrencyPage] = useState(0)

  useEffect(() => {

    if(!isFetching) {
      setNews(cryptoNews?.value);
    }


  }, [cryptoNews, searchTerm]);

  if (isLoading || isFetching) return <Loading />;


  const startIndex = currencyPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currencyList = news?.slice(startIndex, endIndex)

  return (
    <Conteiner CustomClass="Section_Conteiner">
      {!limit && (
        <div className={styles.newsTitle_Conteiner}>
          <h1>Notícias</h1>
          {/* <select>
            {cryptoList?.data?.coins?.map((coin)=>(
              <option onClick={()=>{setSearchTerm(coin.name)}}>{coin.name}</option>
            ))
            }
          </select> */}
        </div>
      )}
      <div className={styles.news_Conteiner}>
        {currencyList?.map((news, i) => (
          <a href={news.url} key={i} target="_blank" rel="noreferrer">
            <NoticesCard
              name={news.name.length > 50
                ? `${news.name.substring(0, 50)}...`
                : news.name}
              image={news?.image?.thumbnail?.contentUrl}
              description={
                news.description.length > 80
                  ? `${news.description.substring(0, 80)}...`
                  : news.description
              }
              textProvider={news.provider[0]?.name}
              imageProvider={news.provider[0]?.image?.thumbnail?.contentUrl}
              date={moment(news.datePublished).startOf("ss").fromNow()}
            ></NoticesCard>
          </a>
        ))}
      </div>
      {!limit && (
        <Pagination
          PerPage={itensPerPage}
          currency={currencyPage}
          list={news?.length}
          setCurrencyPage={setCurrencyPage}
        />
      )}
    </Conteiner>
  );
};

export default NewsPage;
