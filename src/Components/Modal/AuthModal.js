import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Register from "../FormAuth/Register";
import Login from "../FormAuth/Login";
import { Tab, Tabs, AppBar } from '@material-ui/core';
import GoogleButton from "react-google-button"
import { auth } from "../../FireBase";
import { CryptoState } from "../../Contexts/LoggedContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


import styles from "./Modal.module.css"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    color: "black",
    borderRadius: 10,
  },
}));

export default function AuthModal({open:openMenu, setOpen:setOpenMenu}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const { setAlert } = CryptoState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Sign Up Successful. Welcome ${res.user.email}`,
          type: "success",
        });

        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
        return;
      });
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} >
        <p onClick={()=>{setOpenMenu(!openMenu)}}>Login</p>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar
              position="static"
              style={{
                backgroundColor: "transparent",
                color: "black",
              }}
            >
             <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: 10 }}
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value === 0 && <Login btnText="Login" handleClose={handleClose} />}
            {value === 1 && <Register btnText="Sign Up" handleClose={handleClose} />}
            <div className={styles.google}>
              <span>OR</span>
              <GoogleButton
                style={{ width: "100%", outline: "none", backgroundColor:"purple", }}
                onClick={signInWithGoogle}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}