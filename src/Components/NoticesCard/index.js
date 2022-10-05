import React from 'react'

import styles from "./noticesCard.module.css"

const NoticesCard = ({name, url, image, description, imageProvider, textProvider, date}) => {
    return (
      <div className={styles.NoticesCard}>
          <div>
            <img src={image} alt={name}></img > 
            <p>{name}</p>
          </div>
          <p>{description}</p>
          <p>{url}</p>
          <div>
            {/* <img src={imageProvider} alt={textProvider} /> */}
            <p >{textProvider}</p>
          </div>
          <p>{date}</p>
      </div>
    )
  }

export default NoticesCard