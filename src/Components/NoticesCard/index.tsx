import React from 'react'

import styles from "./noticesCard.module.css"

import defaultIcon from "../../icons/iconDefault01.png";
import defaultImage from "../../icons/defaultImage.png";
import { INews } from '../../types/types';

const NoticesCard = ({name, url, image, description, provider, datePublished}:INews) => {
    return (
      <div className={styles.NoticesCard}>
          <div className={styles.NoticesTitle}>
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            <img src={image?.thumbnail?.contentUrl || defaultImage} alt={name} ></img > 
          </div>
          <div>
            <p>{url}</p>
            <div className={styles.NoticesRodapé}>
              <img src={provider[0]?.image?.thumbnail?.contentUrl || defaultIcon} alt={provider[0]?.name}/>
              <p >{provider[0]?.name}</p>
                <p>{datePublished}</p>
            </div>
          </div>
      </div>
    )
  }

export default NoticesCard