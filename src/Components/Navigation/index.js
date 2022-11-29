import React from "react";
import { ImMenu } from "react-icons/im";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";
import BasicModal from "../Modal/modal"
import Avatar from "../avatarHeader";
import { CryptoState } from "../../Contexts/LoggedContext";

const Navigation = ({open, setOpen}) => {

  const { user } = CryptoState()

  return (
    <nav className={styles.navigation_Conteiner}>
      <div className={open ? `${styles.routes}` : `${styles.isOpen}` }>
          <Link to="/exchanges" onClick={()=>{setOpen(!open)}}>Exchanges</Link>
          <Link to="/Cryptocurrencies"onClick={()=>{setOpen(!open)}}>Cryptocurrencies</Link>
          <Link to="/News" onClick={()=>{setOpen(!open)}}>Crypto News</Link>
        <div className={styles.auth}>
         { user ? <Avatar open={open} setOpen={setOpen} /> :  <BasicModal open={open} setOpen={setOpen}/>}
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
