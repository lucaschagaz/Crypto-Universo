import { createApi, fetchBaseQuery  } from  "@reduxjs/toolkit/query/react"

const baseUrl = "https://coinranking1.p.rapidapi.com"

export const NewsApi = createApi({
    reducerPath:"NewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>{
        getNews:bulder.query({
            query:
        })
    }
})