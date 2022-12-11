import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface IExchange {
    id: string;
    url: string;
    name: string;
    year_established: number;
    country:string
    trust_score_rank: number;
    trade_volume_24h_btc:number;
    trade_volume_24h_btc_normalized:number;
    image:string
};

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4a2e6efff4msh4078238201c4fe3p11d7f1jsnfd547a3e95b1',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
};

export const ExchangeApi = createApi({
    reducerPath: 'ExchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coingecko.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getExchang: builder.query<IExchange[], void>({
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


