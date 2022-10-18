import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

// import Search from "../../Components/Search";
import NoticesCard from "../../Components/NoticesCard";
import Loading from "../../Components/Loader"

import { useGetNewsQuery } from "../../services/newsApi";

import styles from "./news.module.css";

const NewsPage = ({ simplifeid }) => {
  // const [searchTerm, setSearchTerm] = useState("bitcoin");
  const count = simplifeid ? 3 : 100;
  const { data: cryptoNews, isFetching, isLoading } = useGetNewsQuery({ count });
  const [news, setNews] = useState();

  useEffect(() => {
    
    if(!isFetching){
      setNews(cryptoNews?.value);
    }
   
  }, []);

  console.log(news);

  if (isLoading || isFetching ) return <Loading/>;

  return (
    <>
      <div className={styles.newsTitle_Conteiner}>
        {!simplifeid && (
          // <Search
          //   value={searchTerm}
          //   handleOnText={(e) => setSearchTerm(e.target.value)}
          // />
          <h1>Notícias</h1>
        )}
      </div>
      <div className={styles.news_Conteiner}>
        {cryptoNews?.value.map((news, i) => (
            <a href={news.url} key={i} target="_blank" rel="noreferrer">
            <NoticesCard
              name={news.name}
              image={news?.image?.thumbnail?.contentUrl}
              description={
                news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
              }
              textProvider={news.provider[0]?.name}
              imageProvider={news.provider[0]?.image?.thumbnail?.contentUrl}
              date={moment(news.datePublished).startOf("ss").fromNow()}
            ></NoticesCard>
          </a>
        ))}
      </div>
    </>
  );
};

export default NewsPage;
