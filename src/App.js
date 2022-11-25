import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { Header, HomePage, ExchangesPage, CryptoCurrencyPage, CryptoDetailsPage, NewsPage } from "./Components"
import Alert from './Components/Alert'
import SideBar from './Components/SideBar'

const App = () => {
  return (
    <Router>
        <Header/>
        <SideBar/>
        <Alert/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/exchanges" element={<ExchangesPage/>} /> 
          <Route path="/Cryptocurrencies" element={<CryptoCurrencyPage/>} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/CryptoDetails/:coinId" element={<CryptoDetailsPage/>} />
        </Routes>
    </Router>
  )
}

export default App