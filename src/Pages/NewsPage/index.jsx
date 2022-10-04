import React, { useState, useEffect } from 'react'
import Search from "../../Components/Search"

import { useGetNewsQuery } from "../../services/newsApi"

const NewsPage = ({ limit }) => {
  const q = "bitcoin"
  const count = limit ? 6 : 100;
  const { data, isLoading, isFetching } = useGetNewsQuery(count, q)
  const [news, setNews] = useState() 

  console.log(data?.value)


  // useEffect(()=>{
  //   // setNews(data?.data?.)

  // },[])

  if(isFetching) return "Loading..."

  return (
    <div className="Currencies-Conteiner">
    <h1>Notícias</h1>
    {!limit && 
      <Search />
    }
  </div> 
  )
}

export default NewsPage;