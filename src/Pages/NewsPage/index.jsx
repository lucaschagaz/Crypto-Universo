import React from 'react'
import Search from "../../Components/Search"

const NewsPage = ({ limit }) => {
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