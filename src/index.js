import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"

import App from './App';
// import store from "./Store/store"
import { store } from "./Store/store"
import CryptoContext from './Contexts/LoggedContext'

const rootNode = document.getElementById('root');

ReactDOM.render(
<CryptoContext>
  <Provider store={store}>
    <App />
  </Provider>
</CryptoContext>
, rootNode);




