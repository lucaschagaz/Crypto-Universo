import React , { useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux"

import App from './App';
import store from "./Store/store"
import CryptoContext from "./Contexts/LoggedContext"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CryptoContext>
      <Provider store={store}>
        <App />
      </Provider>
    </CryptoContext>
  </React.StrictMode>
)


