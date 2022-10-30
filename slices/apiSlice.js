import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://script.google.com/macros/s/AKfycbx4MPmt18Hp-1Lz7UdfQD0uJ-Ih1B4HHSWFG0a6qdlnOrnnFzirO7u8NjTg6jFlXRAB/exec',
        mode: 'cors'
    }),
    endpoints: builder => ({
        getAllStats: builder.query({
            query: () => ''
        })
    })
})

export const { useGetAllStatsQuery } = apiSlice