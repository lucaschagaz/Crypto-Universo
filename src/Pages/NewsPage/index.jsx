import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import Search from "../../Components/Search";
import NoticesCard from "../../Components/NoticesCard";

import { useGetNewsQuery } from "../../services/newsApi";

import styles from "./news.module.css";

const NewsPage = ({ simplifeid }) => {
  const [searchTerm, setSearchTerm] = useState("bitcoin");
  const count = simplifeid ? 6 : 100;
  const { data: cryptoNews, isFetching } = useGetNewsQuery({ searchTerm, count });
  const [news, setNews] = useState();

  console.log(cryptoNews?.value);
  console.log(news);


  useEffect(() => {
    if(!isFetching){
      setNews(cryptoNews?.value);
    }
   
  }, []);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <>
      <div className={styles.newsTitle_Conteiner}>
        <h1>Notícias</h1>
        {!simplifeid && (
          <Search
            value={searchTerm}
            handleOnText={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>
      <div className={styles.news_Conteiner}>
        {cryptoNews?.value.map((news, i) => (
          <Link to={`${news.url}`} key={i}>
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default NewsPage;
