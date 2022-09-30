import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host':'coinranking1.p.rapidapi.com' ,
    'x-rapidapi-key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
};
// const count = 10

// const createRequest = (url) => ({ url,  params: limit, headers: cryptoApiHeaders,});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
        query: (count) => {
            return{
                url:"/coins",
                headers: cryptoApiHeaders,
                params:{
                    limit:count
                }               
            }
        }
        
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi;


