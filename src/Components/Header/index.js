import React from 'react'
import logo from "../../icons/bitcoin-wallet.png"

import { Link } from "react-router-dom"
import "./index.css"
import Conteiner from '../Conteiner'

const Header = () => {
  return (
      <nav className="navBar">
        <Conteiner>
          <div className='Logo'>
            <img src={logo} alt="logo" />
            <h2>Universo Crypto</h2>
          </div>
          <div className="routes">
            <Link to="/Home">Exchanges</Link>
            <Link to="/News">NFT`s</Link>
            <Link to="/Exchanges">Crypto News</Link>
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