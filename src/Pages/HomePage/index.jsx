import React from 'react'

import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa"

import Conteiner from '../../Components/Conteiner'

import "./index.css"

const HomePage = () => {
  return (
    <div className="HomePage">
      <Conteiner CustomClass="homePage_Conteiner">
        <Conteiner CustomClass="Image">
            <h1>Descubra, Analise e Compre CryptoMedas e NFTs</h1>
            <div className='buttons'>
              <button> Descubra agora</button>
              <Link to="/">
                <span>
                  <FaAngleRight/>
                </span>
                  Criar
                </Link>
            </div>
        </Conteiner>
        <Conteiner  CustomClass="Slider">
          <div className="sliderConteiner">
            <h2>Os Principais Ativos em tempo real.</h2>
          </div>
        </Conteiner>
        <Conteiner>
          
        </Conteiner>
      </Conteiner>
    </div>
  )
}

export default HomePage