import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4a2e6efff4msh4078238201c4fe3p11d7f1jsnfd547a3e95b1',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
};

export const ExchangeApi = createApi({
    reducerPath: 'ExchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coingecko.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getExchang: builder.query({
        query: () => {
            return{
                url:"/exchanges",
                headers: cryptoApiHeaders             
            }
        }
        })
    })
})

export const { useGetExchangQuery } = ExchangeApi;


