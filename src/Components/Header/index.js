import React from "react";

// import logo from "../../icons/icon2.png";
import Navigation from "../Navigation";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.Logo}>
        {/* <img src={logo} alt="logo" />; */}
        <Link to="/">
          <h2>Universo Crypto</h2>
        </Link>
      </div>
      <Navigation />
    </nav>
  );
};

export default Header;
