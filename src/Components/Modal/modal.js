import React, { useState } from 'react';

import Register from "../FormAuth/Register";
import Login from "../FormAuth/Login";
import GoogleButton from "react-google-button"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../FireBase";
import { CryptoState } from "../../Contexts/LoggedContext";

import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { Fade, Backdrop, Tab, Tabs, AppBar } from '@mui/material';
// import Tab from '@mui/material';
// import Tabs from '@mui/material';

import styles from "./Modal.module.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open:openMenu, setOpen:setOpenMenu }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user, setUser, setAlert } = CryptoState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);
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
      <button className={styles.login} type="button" onClick={handleOpen} >
        <p onClick={() => { setOpenMenu(!openMenu) }}>Login</p>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
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
                style={{ width: "100%", outline: "none", backgroundColor: "purple", }}
                onClick={signInWithGoogle}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}