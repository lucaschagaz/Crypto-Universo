import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi"
import { SearcNewsApi } from "../services/newsApi"
import { ExchangeApi } from "../services/exchangeApi";


export const store = configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [SearcNewsApi.reducerPath]: SearcNewsApi.reducer,
        [ExchangeApi.reducerPath]: ExchangeApi.reducer,
    },

})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch