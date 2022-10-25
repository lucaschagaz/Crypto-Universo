import React, { useState } from "react";
import { ImMenu } from "react-icons/im";

import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {

  const [open, setOpen] = useState(true)

  return (
    <nav className={styles.navigation_Conteiner}>
      <div className={open ? `${styles.routes}` : `${styles.isOpen}` }>
        <div className={styles.routes_items}>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/News">Crypto News</Link>
        </div>
        <div className={styles.login}>
          <Link to="/">Login</Link>
        </div>
      </div>
      <div  className={styles.menu}>
        <button  onClick={()=> setOpen(!open)}>
          <ImMenu/>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
