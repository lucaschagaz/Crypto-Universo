import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi"
import { NewsApi } from "../services/newsApi"
import { ExchangeApi } from "../services/exchangeApi";


export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [NewsApi.reducerPath]: NewsApi.reducer,
        [ExchangeApi.reducerPath]: ExchangeApi.reducer,
    }
})