import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi"
import { SearcNewsApi } from "../services/newsApi"
import { ExchangeApi } from "../services/exchangeApi";


export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [SearcNewsApi.reducerPath]: SearcNewsApi.reducer,
        [ExchangeApi.reducerPath]: ExchangeApi.reducer,
    }
})