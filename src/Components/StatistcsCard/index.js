import React from "react";

import styles from "./StatisticsCard.module.css";

const StatistcsCard = ({ title, value, icon }) => {
  return (
    <div className={styles.Card}>
      <span>{icon}</span>
        <p>{title}</p>
        <p>{value}</p>
    </div>
  );
};

export default StatistcsCard;
