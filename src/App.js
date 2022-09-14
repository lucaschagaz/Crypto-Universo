import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
// import ExchangesPage from "./Pages/ExchangesPage"


const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/exchanges" element={<ExchangesPage/>} /> */}
          {/* <Route path="/news" element={} /> */}
          {/* <Route path="/Crypto/:id" element={} /> */}
        </Routes>
    </Router>
  )
}

export default App