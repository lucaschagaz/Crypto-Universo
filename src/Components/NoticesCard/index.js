import React from 'react'

import styles from "./noticesCard.module.css"

import defaultIcon from "../../icons/iconDefault01.png";
import defaultImage from "../../icons/defaultImage.png";

const NoticesCard = ({name, url, image, description, imageProvider, textProvider, date}) => {
    return (
      <div className={styles.NoticesCard}>
          <div className={styles.NoticesTitle}>
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            <img src={image || defaultImage} alt={name} ></img > 
          </div>
          <div>
            <p>{url}</p>
            <div className={styles.NoticesRodapé}>
              <img src={imageProvider || defaultIcon} alt={textProvider}/>
              <p >{textProvider}</p>
                <p>{date}</p>
            </div>
          </div>
      </div>
    )
  }

export default NoticesCard