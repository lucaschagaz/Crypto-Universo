import { createApi, fetchBaseQuery  } from  "@reduxjs/toolkit/query/react"

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const CurrenciesNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4a2e6efff4msh4078238201c4fe3p11d7f1jsnfd547a3e95b1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

export const NewsApi = createApi({
    reducerPath:"NewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:({ count})=>{
                return{
                    url:'/search',
                    headers: CurrenciesNewsHeaders,
                    params: {q:"Cryptocurrency", safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day', count:count}         
                }
            }
        })
    })
})

export const { useGetNewsQuery } = NewsApi;