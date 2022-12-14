import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICrypto ,CryptosHistoryParamsQuery } from "../types/types"

const cryptoApiHeaders = {
    'x-rapidapi-host':'coinranking1.p.rapidapi.com' ,
    'x-rapidapi-key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
};
const cryptoApiHeadersHisoty = {
    'X-RapidAPI-Key': '4a2e6efff4msh4078238201c4fe3p11d7f1jsnfd547a3e95b1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query<ICrypto[], number>({
        query: (count) => {
            return{
                url:"/coins",
                headers: cryptoApiHeaders,
                params:{
                    limit:count
                }               
            }
        }
        }), 
        getCryptosDetails: builder.query<ICrypto, number>({
            query: (coinId) => {
                return{
                    url:`/coin/${coinId}`,
                    headers: cryptoApiHeaders              
                }
            }
        }),
        getCryptosHistory: builder.query<ICrypto, CryptosHistoryParamsQuery>({
            query: ({ coinId, timePeriod}) => {
                return{
                    url:`/coin/${coinId}/history`,
                    headers: cryptoApiHeadersHisoty,
                    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: timePeriod}             
                }
            }
        })
    })
})

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } = cryptoApi;


