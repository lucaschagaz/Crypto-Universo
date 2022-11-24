import React from "react";
import { ImMenu } from "react-icons/im";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";
import { CryptoState } from "../../Contexts/LoggedContext";

import styles from "./Navigation.module.css";
import AuthModal from "../FormAuth/AuthModal";

const Navigation = ({open, setOpen}) => {

  const { showForm, setShowForm } = CryptoState()

  return (
    <nav className={styles.navigation_Conteiner}>
      <div className={open ? `${styles.routes}` : `${styles.isOpen}` }>
          <Link to="/exchanges" onClick={()=>{setOpen(!open)}}>Exchanges</Link>
          <Link to="/Cryptocurrencies"onClick={()=>{setOpen(!open)}}>Cryptocurrencies</Link>
          <Link to="/News" onClick={()=>{setOpen(!open)}}>Crypto News</Link>
        <div className={styles.login}>
          {/* <button onClick={()=>{
            setShowForm(!showForm)
          }}>
            Login
          </button> */}
          {/* <Link to="/">Login</Link> */}
          <AuthModal/>
        </div>
      </div>
      <div  className={styles.menu}>
        <button  onClick={()=> setOpen(!open)}>
          {open ? <ImMenu/> : <GrClose/> }
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
