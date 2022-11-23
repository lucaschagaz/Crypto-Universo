import React, {useState} from "react";

// import logo from "../../icons/icon2.png";
import Navigation from "../Navigation";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {

  const [open, setOpen] = useState(true)

  return (
    <nav className={styles.navBar}>
      <div className={styles.Logo}>
        {/* <img src={logo} alt="logo" />; */}
        {open ?  
          <Link to="/" >
            <h2>Universo Crypto</h2>
          </Link> : 
          <Link to="/" onClick={()=>{setOpen(!open)}}>
            <h2>Universo Crypto</h2>
          </Link>
        }
      </div>
      <Navigation open={open} setOpen={setOpen}/>
    </nav>
  );
};

export default Header;
