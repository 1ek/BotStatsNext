import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://script.google.com/macros/s/' + process.env.GOOGLE_URL,
        mode: 'cors'
    }),
    endpoints: builder => ({
        getAllStats: builder.query({
            query: () => ''
        })
    })
})

export const { useGetAllStatsQuery } = apiSlice