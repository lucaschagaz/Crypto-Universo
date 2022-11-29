import React , { useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"

import App from './App';
import store from "./Store/store"
import CryptoContext from "./Contexts/LoggedContext"

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootNode = document.getElementById('root');

ReactDOM.render(
<CryptoContext>
  <Provider store={store}>
    <App />
  </Provider>
</CryptoContext>
, rootNode);

// root.render(
//  
// )



