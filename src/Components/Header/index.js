import React from 'react'
import logo from "../../icons/bitcoin.png"

import { Link } from "react-router-dom"
import "./index.css"
import Conteiner from '../Conteiner'

const Header = () => {
  return (
      <nav className="navBar">
        <Conteiner>
          <div className='Logo'>
            <img src={logo} alt="logo" />
            <Link to="/">
              <h2>Universo Crypto</h2>
            </Link>
          </div>
          <div className="routes">
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/News">Crypto News</Link>
          </div>
          <div className="login">
            <p>Procurar</p>
            <Link to="/">Login</Link>
          </div>
        </Conteiner>
      </nav>
  )
}

export default Header;