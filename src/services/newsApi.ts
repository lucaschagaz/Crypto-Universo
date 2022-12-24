import { createApi, fetchBaseQuery  } from  "@reduxjs/toolkit/query/react"
import {NewsParamsQuery,IAllNews} from '../types/types'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const CurrenciesNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4a2e6efff4msh4078238201c4fe3p11d7f1jsnfd547a3e95b1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
export const SearcNewsApi = createApi({
    reducerPath:"SearcNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query<IAllNews,NewsParamsQuery>({
            query:({ count, searchTerm})=>{
                return{
                    url:'/search',
                    headers: CurrenciesNewsHeaders,
                    params: {
                        q:searchTerm, 
                        safeSearch: 'Off', 
                        textFormat: 'Raw', 
                        freshness: 'Day',
                        count:count
                    }
                }
            }
        })
    })
})

export const { useGetNewsQuery } = SearcNewsApi;